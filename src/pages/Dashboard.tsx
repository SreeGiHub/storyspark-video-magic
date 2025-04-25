
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Archive, Film, Image, Search } from "lucide-react";
import { VideoCard } from "@/components/dashboard/VideoCard";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "Circle Website Design Review - Complete Walkthrough and Analysis of the New Homepage Layout",
    status: "Draft",
    createdAt: "2024-04-22T10:00:00Z",
    thumbnailUrl: "/placeholder.svg",
    imageCount: 5,
    duration: 132,
  },
  {
    id: "2",
    title: "Spotify Playlist UX Feedback Session",
    status: "Completed",
    createdAt: "2024-04-21T15:30:00Z",
    thumbnailUrl: "/placeholder.svg",
    imageCount: 8,
    duration: 1500,
  },
];

const Dashboard: React.FC = () => {
  const handleCreateStory = () => {
    console.log("Create new story");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset className="p-6">
          <div className="max-w-[1600px] mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[280px]">
                <h1 className="text-xl font-semibold text-foreground mb-4">Video Library</h1>
                <Tabs defaultValue="videos" className="w-full">
                  <TabsList className="bg-transparent p-0 text-base">
                    <TabsTrigger 
                      value="videos" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-purple-600 px-0 mr-6"
                    >
                      <Film className="w-4 h-4 mr-2" />
                      Videos
                    </TabsTrigger>
                    <TabsTrigger 
                      value="archives" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-purple-600 px-0 mr-6"
                    >
                      <Archive className="w-4 h-4 mr-2" />
                      Archives
                    </TabsTrigger>
                    <TabsTrigger 
                      value="screenshots" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-purple-600 px-0"
                    >
                      <Image className="w-4 h-4 mr-2" />
                      Screenshots
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="pl-9 pr-4 py-2 bg-accent/10 border-0 rounded-full w-[280px] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-background"
                  />
                </div>
                <Button onClick={handleCreateStory} className="bg-purple-600 hover:bg-purple-700 rounded-full gap-2">
                  <Plus className="w-4 h-4" />
                  Create Video
                </Button>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
              {projects.map((project) => (
                <VideoCard
                  key={project.id}
                  title={project.title}
                  duration={`${Math.floor(project.duration / 60)}m ${project.duration % 60}s`}
                  createdAt={project.createdAt}
                  thumbnailUrl={project.thumbnailUrl}
                  uploaderInitials="AJ"
                />
              ))}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
