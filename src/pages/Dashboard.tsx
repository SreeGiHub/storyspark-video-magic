import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Bell, Search } from "lucide-react";
import { VideoCard } from "@/components/dashboard/VideoCard";
import { Project } from "@/types/project";
import { Link } from "react-router-dom";

const projects: Project[] = [{
  id: "1",
  title: "UI Design Feedback",
  status: "Draft",
  createdAt: "2024-04-22T10:00:00Z",
  thumbnailUrl: "/placeholder.svg",
  imageCount: 5,
  duration: 132
}, {
  id: "2",
  title: "History Chapter Narration",
  status: "Completed",
  createdAt: "2024-04-21T15:30:00Z",
  thumbnailUrl: "/placeholder.svg",
  imageCount: 8,
  duration: 1500
}, {
  id: "3",
  title: "Weekly Story Recap",
  status: "Draft",
  createdAt: "2024-04-20T09:15:00Z",
  thumbnailUrl: "/placeholder.svg",
  imageCount: 3,
  duration: 845
}];

const Dashboard = () => {
  return <div className="min-h-screen w-full bg-white">
      <div className="p-6 max-w-[1600px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <h1 className="text-purple-500 text-2xl font-extrabold">StorySpark</h1>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search something..." className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full w-[280px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" />
            </div>
            <Link to="/create">
              <Button className="bg-[#9b87f5] hover:bg-[#8674e1] text-white rounded-full gap-2 transition-colors">
                <Plus className="w-4 h-4" />
                Create
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => <VideoCard key={project.id} title={project.title} duration={`${Math.floor(project.duration / 60)}:${String(project.duration % 60).padStart(2, '0')}`} createdAt={project.createdAt} thumbnailUrl={project.thumbnailUrl} uploaderInitials="AJ" />)}
        </div>
      </div>
    </div>;
};

export default Dashboard;
