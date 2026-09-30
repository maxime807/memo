export interface EventConfig {
  title: string;
  subtitle: string;
  eventName: string;
  currentFolder: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  initialPhotos: {
    id: string;
    url: string;
    fullUrl: string;
    downloadUrl: string;
    title: string;
    author: string;
    time: string;
    aspectRatio: number;
  }[];
}

export const eventConfig: EventConfig = {
  title: "DÉCOUVREZ",
  subtitle: "MEMŌ",
  eventName: "SOIRÉE ANNUELLE & WORKSHOP",
  currentFolder: "Weekend à Lacanau",
  date: "12 AOÛT 2026",
  location: "PARIS",
  description: "ESPACE CENTRALISÉ POUR RASSEMBLER TOUS LES SOUVENIRS DE L'ÉVÉNEMENT. DÉPOSEZ VOS PHOTOS ET TÉLÉCHARGEZ LES ORIGINAUX EN HAUTE RÉSOLUTION.",
  coverImage: "/images-exemples/grid/dan-begel-Tkt4YkA8zl8-unsplash.jpg",
  initialPhotos: [
    {
      id: "ex-1",
      url: "/images-exemples/grid/arlind-photography-VwoQScoQV_E-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/arlind-photography-VwoQScoQV_E-unsplash.jpg",
      downloadUrl: "/images-exemples/arlind-photography-VwoQScoQV_E-unsplash.jpg",
      title: "Cocktail & Accueil",
      author: "Arlind P.",
      time: "18:15",
      aspectRatio: 0.67,
    },
    {
      id: "ex-2",
      url: "/images-exemples/grid/nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
      downloadUrl: "/images-exemples/nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
      title: "Pause Café & Échanges",
      author: "Nathan D.",
      time: "18:45",
      aspectRatio: 1.5,
    },
    {
      id: "ex-3",
      url: "/images-exemples/grid/arlind-photography-nqWh_o6KwkY-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/arlind-photography-nqWh_o6KwkY-unsplash.jpg",
      downloadUrl: "/images-exemples/arlind-photography-nqWh_o6KwkY-unsplash.jpg",
      title: "Détails & Ambiance",
      author: "Arlind P.",
      time: "19:10",
      aspectRatio: 0.67,
    },
    {
      id: "ex-4",
      url: "/images-exemples/grid/frank-huang-NT8soa0sHto-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/frank-huang-NT8soa0sHto-unsplash.jpg",
      downloadUrl: "/images-exemples/frank-huang-NT8soa0sHto-unsplash.jpg",
      title: "Scène & Discours",
      author: "Frank H.",
      time: "19:40",
      aspectRatio: 0.67,
    },
    {
      id: "ex-5",
      url: "/images-exemples/grid/haoli-chen-O6-eNRScE2Y-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/haoli-chen-O6-eNRScE2Y-unsplash.jpg",
      downloadUrl: "/images-exemples/haoli-chen-O6-eNRScE2Y-unsplash.jpg",
      title: "Lumières du Soir",
      author: "Haoli C.",
      time: "20:20",
      aspectRatio: 0.71,
    },
    {
      id: "ex-6",
      url: "/images-exemples/grid/karsten-winegeart-xMCKX2o9FpU-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/karsten-winegeart-xMCKX2o9FpU-unsplash.jpg",
      downloadUrl: "/images-exemples/karsten-winegeart-xMCKX2o9FpU-unsplash.jpg",
      title: "Célébration & Rires",
      author: "Karsten W.",
      time: "20:50",
      aspectRatio: 0.67,
    },
    {
      id: "ex-7",
      url: "/images-exemples/grid/kellen-riggin-X5RuWVWGMfY-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/kellen-riggin-X5RuWVWGMfY-unsplash.jpg",
      downloadUrl: "/images-exemples/kellen-riggin-X5RuWVWGMfY-unsplash.jpg",
      title: "Moments Partagés",
      author: "Kellen R.",
      time: "21:30",
      aspectRatio: 0.67,
    },
    {
      id: "ex-8",
      url: "/images-exemples/grid/kellen-riggin-npvUW0MbB70-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/kellen-riggin-npvUW0MbB70-unsplash.jpg",
      downloadUrl: "/images-exemples/kellen-riggin-npvUW0MbB70-unsplash.jpg",
      title: "Vue d'Ensemble",
      author: "Kellen R.",
      time: "22:00",
      aspectRatio: 0.67,
    },
    {
      id: "ex-9",
      url: "/images-exemples/grid/patty-brito-eHOZjZEx7u8-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/patty-brito-eHOZjZEx7u8-unsplash.jpg",
      downloadUrl: "/images-exemples/patty-brito-eHOZjZEx7u8-unsplash.jpg",
      title: "Clôture & Toast",
      author: "Patty B.",
      time: "22:45",
      aspectRatio: 0.67,
    },
    {
      id: "ex-10",
      url: "/images-exemples/grid/rafael-hoyos-weht-E_64gSEfZSs-unsplash.jpg",
      fullUrl: "/images-exemples/optimized/rafael-hoyos-weht-E_64gSEfZSs-unsplash.jpg",
      downloadUrl: "/images-exemples/rafael-hoyos-weht-E_64gSEfZSs-unsplash.jpg",
      title: "Nocturne & Souvenirs",
      author: "Rafael H.",
      time: "23:15",
      aspectRatio: 0.67,
    },
  ],
};
