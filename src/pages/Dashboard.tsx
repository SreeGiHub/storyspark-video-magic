
import React from "react";
import AppSidebar from "@/components/AppSidebar";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

// --- MOCK DATA FOR DEMO ---
const MOCK_PROJECTS = [
  {
    id: "1",
    title: "Paris Adventure",
    status: "Completed",
    createdAt: "2024-04-20",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Birthday Surprise",
    status: "Processing",
    createdAt: "2024-04-18",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Dog Days",
    status: "Draft",
    createdAt: "2024-04-11",
    thumbnailUrl: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Family Picnic",
    status: "Completed",
    createdAt: "2024-03-29",
    thumbnailUrl: "/placeholder.svg",
  },
];

const USER_NAME = "Jordan";

const Dashboard: React.FC = () => {
  // Placeholder handlers for actions
  const handleEdit = (id: string) => {
    alert(`Edit ${id}`);
  };
  const handleDownload = (id: string) => {
    alert(`Download ${id}`);
  };
  const handleDelete = (id: string) => {
    alert(`Delete ${id}`);
  };
  const handleCreate = () => {
    alert(`Create new story!`);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#403E43]">
      <AppSidebar />
      <main className="flex-1 flex flex-col px-4 md:px-10 py-8">
        <header>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-2">
            Welcome, {USER_NAME} <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            Start a new visual story or pick up where you left off.
          </p>
        </header>

        <section className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Your Projects</h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg font-semibold text-lg px-6 rounded-xl hover:scale-105 transition-transform"
            onClick={handleCreate}
          >
            + Create New Story
          </Button>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {MOCK_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={handleEdit}
                onDownload={handleDownload}
                onDelete={handleDelete}
              />
            ))}
          </div>
          {MOCK_PROJECTS.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No projects yet. Click "Create New Story" to start!
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
