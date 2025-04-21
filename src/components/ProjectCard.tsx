
import React from "react";
import { Button } from "@/components/ui/button";

type Project = {
  id: string;
  title: string;
  status: "Draft" | "Processing" | "Completed";
  createdAt: string;
  thumbnailUrl: string;
};

interface ProjectCardProps {
  project: Project;
  onEdit: (id: string) => void;
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<Project["status"], string> = {
  Draft: "bg-yellow-400 text-gray-900",
  Processing: "bg-blue-500 text-white",
  Completed: "bg-green-500 text-white",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDownload,
  onDelete,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#232133] to-[#2E2946] rounded-2xl shadow-card p-4 flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={project.thumbnailUrl}
        alt={project.title}
        className="w-full h-40 object-cover rounded-xl mb-3 border border-[#403E43]"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-white mb-1">{project.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
          <span className="text-gray-400 text-xs ml-auto">{project.createdAt}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button variant="secondary" size="sm" className="flex-1" onClick={() => onEdit(project.id)}>
          Edit
        </Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onDownload(project.id)}>
          Download
        </Button>
        <Button variant="destructive" size="sm" className="flex-1" onClick={() => onDelete(project.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
