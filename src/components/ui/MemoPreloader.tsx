"use client";
import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

interface MemoPreloaderProps {
  onComplete?: () => void;
  images?: string[];
  fontSize?: number;
}

const DEFAULT_LOADER_IMAGES = [
  "/images-loader/landscape-01.jpg",
  "/images-loader/landscape-02.jpg",
  "/images-loader/landscape-03.jpg",
  "/images-loader/landscape-04.jpg",
  "/images-loader/landscape-05.jpg",
  "/images-loader/landscape-06.jpg",
  "/images-loader/landscape-07.jpg",
  "/images-loader/landscape-08.jpg",
  "/images-loader/landscape-09.jpg",
  "/images-loader/landscape-10.jpg",
];

export const MemoPreloader: React.FC<MemoPreloaderProps> = ({
  onComplete,
  images = DEFAULT_LOADER_IMAGES,
  fontSize = 120,
}) => {
  const [scope, animate] = useAnimate();
  const [isDone, setIsDone] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const startLetters = ["M", "e"];
  const endLetters = ["m", "ō"];

  const activeImages = images && images.length > 0 ? images : DEFAULT_LOADER_IMAGES;

  // Préchargement proactif des images en mémoire
  useEffect(() => {
    activeImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [activeImages]);

  const EASE = [0.87, 0, 0.13, 1] as const;
  const CURTAIN_EASE = [0.76, 0, 0.24, 1] as const;

  useEffect(() => {
    let isCancelled = false;

    const runAnimation = async () => {
      try {
        // Phase 1 — Les lettres "Me" et "mō" montent ensemble du bas (texte soudé)
        await animate(
          ".loader-letter",
          { y: ["150%", "0%"] },
          {
            duration: 1.05,
            ease: EASE,
            delay: (i) => i * 0.03,
          }
        );

        if (isCancelled) return;

        // Phase 2 — LE TEXTE SE SÉPARE ET LE VOLET D'IMAGE SE DÉVOILE
        await Promise.all([
          animate(
            ".loader-box",
            { width: ["0em", "1.28em"] },
            { duration: 1.1, ease: EASE }
          ),
          animate(
            ".h1-start",
            { x: ["0em", "-0.06em"] },
            { duration: 1.1, ease: EASE }
          ),
          animate(
            ".h1-end",
            { x: ["0em", "0.06em"] },
            { duration: 1.1, ease: EASE }
          ),
        ]);

        if (isCancelled) return;

        // Phase 3 — DÉFILEMENT PARFAITEMENT FLUIDE SANS CLIGNOTEMENT
        // On incrémente l'image active de manière cadencée et constante
        for (let i = 1; i < activeImages.length; i++) {
          await new Promise((r) => setTimeout(r, 160));
          if (isCancelled) return;
          setActiveImgIndex(i);
        }

        if (isCancelled) return;

        // Pause contemplative sur le dernier cliché
        await new Promise((r) => setTimeout(r, 450));

        if (isCancelled) return;

        // Phase 4 — EFFET RIDEAU : Le panneau entier se lève vers le haut
        await Promise.all([
          animate(
            ".loader-title-wrapper",
            { y: [0, -120], opacity: [1, 0.3] },
            { duration: 0.85, ease: CURTAIN_EASE }
          ),
          animate(
            scope.current,
            { y: ["0%", "-100%"] },
            { duration: 0.95, ease: CURTAIN_EASE }
          ),
        ]);

        if (!isCancelled) {
          setIsDone(true);
          if (onComplete) onComplete();
        }
      } catch {
        if (!isCancelled) {
          setIsDone(true);
          if (onComplete) onComplete();
        }
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, [animate, onComplete, scope, activeImages.length]);

  if (isDone) return null;

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black overflow-hidden pointer-events-auto select-none shadow-2xl"
      style={{ willChange: "transform" }}
    >
      <div
        className="loader-title-wrapper relative flex items-center justify-center font-medium tracking-tight"
        style={{
          fontSize: `clamp(48px, 11vw, ${fontSize}px)`,
          lineHeight: 0.75,
          whiteSpace: "nowrap",
          willChange: "transform, opacity",
        }}
      >
        {/* Première moitié : "Me" */}
        <div className="h1-start flex justify-end overflow-hidden pb-[0.25em] mb-[-0.25em]">
          {startLetters.map((letter, i) => (
            <span
              key={`start-${i}`}
              className="loader-letter block"
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Volet central au ratio paysage 3:2 qui s'ouvre en séparant le texte */}
        <div
          className="loader-box flex flex-col justify-center items-center relative overflow-hidden"
          style={{
            width: 0,
            height: "0.85em",
          }}
        >
          <div
            className="flex justify-center items-center h-full relative"
            style={{
              minWidth: "1.28em",
            }}
          >
            <div className="w-full h-full relative overflow-hidden rounded-[2px] bg-neutral-100">
              {activeImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: i === activeImgIndex ? 1 : 0,
                    zIndex: i === activeImgIndex ? 2 : 1,
                    pointerEvents: "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Deuxième moitié : "mō" */}
        <div className="h1-end flex justify-start overflow-hidden pb-[0.25em] mb-[-0.25em]">
          {endLetters.map((letter, i) => (
            <span
              key={`end-${i}`}
              className="loader-letter block"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
