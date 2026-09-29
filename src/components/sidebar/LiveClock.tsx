import { useState, useEffect } from 'react';

export function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-ink/80">
      <span>PARIS</span>
      <span>•</span>
      <span>{time || '--:--'}</span>
    </div>
  );
}
