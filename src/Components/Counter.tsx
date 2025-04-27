"use client";

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  targetValue: number;
  label: string;
  duration?: number;
}

/**
 * Animated counter component for displaying statistics
 * @param {CounterProps} props Component props
 */
const Counter = ({ targetValue, label, duration = 1500 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterStarted = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counterStarted.current) {
          counterStarted.current = true;
          startCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = 1 - remaining / duration;
      
      const nextCount = Math.floor(progress * targetValue);
      
      setCount(nextCount);

      if (remaining > 0) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div 
      ref={counterRef}
      className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:translate-2"
     >
      <div className="text-4xl font-bold text-gray-800 mb-1">
        {count}+
      </div>
      <div className="text-gray-600 text-[15px]">{label}</div>
    </div>
  );
};

export default Counter;