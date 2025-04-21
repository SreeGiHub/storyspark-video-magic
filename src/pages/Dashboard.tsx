
import React from "react";
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="p-10 bg-white rounded-2xl shadow-xl flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4">
          👋 Welcome to StorySparkVR!
        </h1>
        <p className="text-lg text-gray-600 max-w-md text-center mb-3">
          You're signed in and ready to turn your photos into magical narrated videos.
        </p>
        <span className="text-xs text-muted-foreground mb-2">The dashboard is under construction.</span>
      </div>
    </div>
  );
};
export default Dashboard;
