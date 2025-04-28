
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { AudioWaveform, Video, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';

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
  const [previewingVideo, setPreviewingVideo] = useState<string | null>(null);
  
  const handlePreviewAudio = (imageId: string) => {
    setPreviewingAudio(prevId => prevId === imageId ? null : imageId);
    setPreviewingVideo(null); // Stop video preview when audio starts
  };

  const handlePreviewVideo = (imageId: string) => {
    setPreviewingVideo(prevId => prevId === imageId ? null : imageId);
    setPreviewingAudio(null); // Stop audio preview when video starts
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
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex items-center gap-1 ${previewingAudio === image.id ? 'bg-[#9b87f5]/10 border-[#9b87f5]' : ''}`}
                      onClick={() => handlePreviewAudio(image.id)}
                    >
                      {previewingAudio === image.id ? (
                        <>
                          <AudioWaveform className="h-4 w-4 text-[#9b87f5]" />
                          Stop Audio
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Preview Audio
                        </>
                      )}
                    </Button>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex items-center gap-1 ${previewingVideo === image.id ? 'bg-[#9b87f5]/10 border-[#9b87f5]' : ''}`}
                      onClick={() => handlePreviewVideo(image.id)}
                    >
                      {previewingVideo === image.id ? (
                        <>
                          <Video className="h-4 w-4 text-[#9b87f5]" />
                          Stop Video
                        </>
                      ) : (
                        <>
                          <Video className="h-4 w-4" />
                          Preview Video
                        </>
                      )}
                    </Button>

                    <Input
                      type="number"
                      min="1"
                      step="0.1"
                      defaultValue="5"
                      className="w-24"
                      placeholder="Duration (s)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
