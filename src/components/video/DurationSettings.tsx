
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DurationSettingsProps {
  images: { id: string; url: string }[];
}

export const DurationSettings: React.FC<DurationSettingsProps> = ({ images }) => {
  return (
    <ScrollArea className="h-[500px] rounded-md border border-gray-100 p-4">
      <div className="space-y-6">
        {images.map((image) => (
          <div key={image.id} className="flex items-center gap-4">
            <img
              src={image.url}
              alt="Thumbnail"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <Label htmlFor={`duration-${image.id}`}>Duration (seconds)</Label>
              <Input
                id={`duration-${image.id}`}
                type="number"
                min="1"
                step="0.1"
                defaultValue="5"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
