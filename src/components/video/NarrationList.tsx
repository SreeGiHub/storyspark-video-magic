
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { AudioWaveform, Play } from 'lucide-react';

interface NarrationListProps {
  images: { id: string; url: string }[];
}

const languages = [
  { value: 'en-US', label: 'English (US)', flag: '🇺🇸' },
  { value: 'es-ES', label: 'Spanish', flag: '🇪🇸' },
  { value: 'fr-FR', label: 'French', flag: '🇫🇷' },
  { value: 'de-DE', label: 'German', flag: '🇩🇪' },
  { value: 'it-IT', label: 'Italian', flag: '🇮🇹' },
];

export const NarrationList: React.FC<NarrationListProps> = ({ images }) => {
  const [previewingAudio, setPreviewingAudio] = useState<string | null>(null);
  
  const handlePreviewAudio = (imageId: string) => {
    // In a real implementation, this would generate or play the audio
    // For now, we'll just toggle the preview state
    setPreviewingAudio(prevId => prevId === imageId ? null : imageId);
  };
  
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
                <div className="flex items-center gap-3 flex-wrap">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${previewingAudio === image.id ? 'bg-[#9b87f5]/10 border-[#9b87f5]' : ''}`}
                    onClick={() => handlePreviewAudio(image.id)}
                  >
                    {previewingAudio === image.id ? (
                      <>
                        <AudioWaveform className="h-4 w-4 text-[#9b87f5]" />
                        Stop Preview
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Preview Audio
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
