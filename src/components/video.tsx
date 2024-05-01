// components/VideoComponent.tsx
import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="justify-self-center">
      <div className="relative w-full h-0 aspect-w-16 aspect-h-9  shadow-2xl shadow-black">
      <video autoPlay controls className="w-100 h-auto">
        <source src="https://nitrofilesystem.blob.core.windows.net/ineer/conversion_page/ineer_energy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default Video;
