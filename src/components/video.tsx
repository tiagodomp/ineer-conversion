// components/VideoComponent.tsx
import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="justify-self-center">
      <video autoPlay loop controls className="w-100 h-auto shadow-2xl">
        <source src="/ineer_energy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
