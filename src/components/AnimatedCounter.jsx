import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 1500, className = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

export default AnimatedCounter;
