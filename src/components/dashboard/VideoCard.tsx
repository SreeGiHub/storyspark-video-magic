
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play } from "lucide-react";
import { format } from "date-fns";

interface VideoCardProps {
  title: string;
  duration: string;
  createdAt: string;
  thumbnailUrl: string;
  uploaderInitials: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  duration,
  createdAt,
  thumbnailUrl,
  uploaderInitials,
}) => {
  return (
    <Card className="group overflow-hidden bg-white border border-gray-200 hover:border-[#9b87f5]/30 hover:shadow-lg transition-all duration-200">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-200">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </div>
      <div className="p-4 flex gap-3">
        <Avatar className="h-8 w-8 mt-0.5">
          <AvatarFallback className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs">
            {uploaderInitials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1 min-w-0">
          <h3 className="font-medium text-sm text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{duration}</span>
            <span>•</span>
            <span>{format(new Date(createdAt), 'MMM d, yyyy')}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
