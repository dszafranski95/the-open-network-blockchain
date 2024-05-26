// src/components/Loader/Loader.tsx
import React from 'react';
import './style.css'; 

const Loader = () => {
  return (
    <div className="loader-backdrop">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
