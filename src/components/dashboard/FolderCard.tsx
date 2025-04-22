
import { Folder, Edit2, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder as FolderType } from "@/types/project";

interface FolderCardProps {
  folder: FolderType;
  onOpen: (id: string) => void;
  onRename: (id: string) => void;
  onDelete: (id: string) => void;
}

export function FolderCard({ folder, onOpen, onRename, onDelete }: FolderCardProps) {
  return (
    <Card className="group relative hover:shadow-lg transition-all duration-200">
      <button
        onClick={() => onOpen(folder.id)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <Folder className="w-6 h-6 text-purple-500" />
          <div>
            <h3 className="font-semibold">{folder.title}</h3>
            <p className="text-sm text-muted-foreground">
              {folder.storyCount} {folder.storyCount === 1 ? 'story' : 'stories'}
            </p>
          </div>
        </div>
      </button>
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRename(folder.id)}
        >
          <Edit2 className="h-4 w-4" />
          <span className="sr-only">Rename folder</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(folder.id)}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete folder</span>
        </Button>
      </div>
    </Card>
  );
}
