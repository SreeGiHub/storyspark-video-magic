
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Project } from "@/types/project";

// Placeholder data for demonstration
const projects: Project[] = [
  {
    id: "1",
    title: "My First Story",
    status: "Draft",
    createdAt: "2024-04-22T10:00:00Z",
    thumbnailUrl: "/placeholder.svg",
  },
];

const Dashboard: React.FC = () => {
  const handleCreateStory = () => {
    // TODO: Implement create story functionality
    console.log("Create new story");
  };

  const handleEdit = (id: string) => {
    console.log("Edit story", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete story", id);
  };

  const handleDownload = (id: string) => {
    console.log("Download story", id);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-indigo-100 to-purple-100">
        <AppSidebar />
        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="p-10 bg-white rounded-2xl shadow-xl flex flex-col items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4">
              👋 Welcome to StorySparkVR!
            </h1>
            <p className="text-lg text-gray-600 max-w-md text-center">
              You're signed in and ready to turn your photos into magical narrated videos.
            </p>
          </div>

          {/* Projects Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
              <Button
                onClick={handleCreateStory}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                <Plus className="mr-2 h-4 w-4" /> Create New Story
              </Button>
            </div>

            {projects.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl text-gray-600 mb-4">
                  You don't have any stories yet
                </h3>
                <p className="text-gray-500 mb-6">
                  Click 'Create New Story' to get started!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
