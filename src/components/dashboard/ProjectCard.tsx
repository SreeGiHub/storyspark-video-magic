
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Download, Trash2 } from "lucide-react";
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
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <div className="flex gap-2 items-center mt-1">
              <span className="text-sm text-muted-foreground">
                {format(new Date(project.createdAt), 'MMM d, yyyy')}
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700">
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(project.id)}
          >
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDownload(project.id)}
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-destructive"
            onClick={() => onDelete(project.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
