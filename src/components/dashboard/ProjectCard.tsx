
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Download, Trash2, Image, Clock } from "lucide-react";
import { Project } from "@/types/project";
import { format } from "date-fns";

interface ProjectCardProps {
  project: Project;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDownload: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDelete,
  onDownload,
}) => {
  const statusColors = {
    Draft: "bg-purple-100 text-purple-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-200">
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors">
          <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onEdit(project.id)}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onDownload(project.id)}
            >
              <Download className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="hover:text-red-600"
              onClick={() => onDelete(project.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{project.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Image className="w-4 h-4" />
            <span>{project.imageCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{Math.round(project.duration / 60)}m</span>
          </div>
          <div className="flex-1 text-right text-xs">
            {format(new Date(project.createdAt), 'MMM d, yyyy')}
          </div>
        </div>
      </div>
    </Card>
  );
}
