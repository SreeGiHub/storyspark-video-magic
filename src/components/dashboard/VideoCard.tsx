
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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-200 bg-white">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-200">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 leading-snug line-clamp-2 mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                {uploaderInitials}
              </AvatarFallback>
            </Avatar>
            <span>{duration}</span>
          </div>
          <span>{format(new Date(createdAt), 'MMM d, yyyy')}</span>
        </div>
      </div>
    </Card>
  );
};
