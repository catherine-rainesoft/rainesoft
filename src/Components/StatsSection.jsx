// Components/StatsSection.jsx
"use client";

import Counter from './Counter';

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 mt-8">
      <Counter 
        targetValue={25} 
        label="Completed Projects" 
        duration={1500} 
      />
      <Counter 
        targetValue={5} 
        label="Years of Experience" 
        duration={1000} 
      />
      <Counter 
        targetValue={15} 
        label="Custom Apps Built" 
        duration={1200} 
      />
    </div>
  );
};

export default StatsSection;