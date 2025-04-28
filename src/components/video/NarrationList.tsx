
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface NarrationListProps {
  images: { id: string; url: string }[];
}

const languages = [
  { value: 'en-US', label: 'English (US)' },
  { value: 'es-ES', label: 'Spanish' },
  { value: 'fr-FR', label: 'French' },
  { value: 'de-DE', label: 'German' },
  { value: 'it-IT', label: 'Italian' },
];

export const NarrationList: React.FC<NarrationListProps> = ({ images }) => {
  return (
    <ScrollArea className="h-[500px] rounded-md border border-gray-100 p-4">
      <div className="space-y-6">
        {images.map((image) => (
          <div key={image.id} className="space-y-4">
            <div className="flex gap-4">
              <img
                src={image.url}
                alt="Thumbnail"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 space-y-4">
                <Textarea
                  placeholder="Enter narration text..."
                  className="min-h-[80px] resize-none"
                />
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
