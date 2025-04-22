
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { FolderCard } from "@/components/dashboard/FolderCard";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Project, Folder } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "My First Story",
    status: "Draft",
    createdAt: "2024-04-22T10:00:00Z",
    thumbnailUrl: "/placeholder.svg",
    imageCount: 5,
    duration: 120,
  },
];

const folders: Folder[] = [
  {
    id: "1",
    title: "Welcome Stories",
    storyCount: 1,
  },
];

const Dashboard: React.FC = () => {
  const handleCreateStory = () => {
    console.log("Create new story");
  };

  const handleCreateFolder = () => {
    console.log("Create new folder");
  };

  const handleFolderOpen = (id: string) => {
    console.log("Open folder", id);
  };

  const handleFolderRename = (id: string) => {
    console.log("Rename folder", id);
  };

  const handleFolderDelete = (id: string) => {
    console.log("Delete folder", id);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50 to-purple-100/50">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* My Folders Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">My Folders</h2>
                <Button
                  onClick={handleCreateFolder}
                  variant="outline"
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  New Folder
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {folders.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    folder={folder}
                    onOpen={handleFolderOpen}
                    onRename={handleFolderRename}
                    onDelete={handleFolderDelete}
                  />
                ))}
              </div>
            </section>

            {/* Recent Stories Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Recent Stories</h2>
                <Button onClick={handleCreateStory} className="bg-purple-600 hover:bg-purple-700 gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Story
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length === 0 ? (
                  <div className="col-span-full text-center py-12 bg-white/50 rounded-2xl border border-purple-100">
                    <h3 className="text-xl text-gray-600 mb-4">
                      You don't have any stories yet
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Click 'Create New Story' to get started!
                    </p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onEdit={() => console.log("Edit", project.id)}
                      onDelete={() => console.log("Delete", project.id)}
                      onDownload={() => console.log("Download", project.id)}
                    />
                  ))
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
