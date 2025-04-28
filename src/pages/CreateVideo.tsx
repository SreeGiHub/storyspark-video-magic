
import React from 'react';
import { VideoCreator } from '@/components/video/VideoCreator';

const CreateVideo = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-6 max-w-[1600px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-purple-500 text-2xl font-extrabold">StorySpark</h1>
        </div>
        
        <VideoCreator />
      </div>
    </div>
  );
};

export default CreateVideo;
