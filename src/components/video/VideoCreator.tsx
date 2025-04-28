import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ImageUploader } from './ImageUploader';
import { NarrationList } from './NarrationList';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const VideoCreator = () => {
  const [videoType, setVideoType] = useState<'youtube' | 'reel'>('youtube');
  const [images, setImages] = useState<{ id: string; url: string }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Simulated progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };

  // Function to reorder images
  const reorderImages = (startIndex: number, endIndex: number) => {
    const result = Array.from(images);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setImages(result);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white shadow-sm border border-gray-100">
        <div className="flex justify-center mb-6">
          <ToggleGroup type="single" value={videoType} onValueChange={(value: 'youtube' | 'reel') => setVideoType(value)}>
            <ToggleGroupItem value="youtube" aria-label="YouTube Video">
              YouTube Video (16:9)
            </ToggleGroupItem>
            <ToggleGroupItem value="reel" aria-label="Reel">
              Reel (9:16)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ImageUploader images={images} setImages={setImages} onReorder={reorderImages} />
          </div>
          <div className="md:col-span-3">
            <NarrationList images={images} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button 
            className="w-64 h-12 bg-[#9b87f5] hover:bg-[#8674e1] text-white"
            onClick={handleGenerate}
            disabled={isGenerating || images.length === 0}
          >
            {isGenerating ? 'Generating...' : 'Generate Video (720p)'}
          </Button>
          {isGenerating && (
            <Progress value={progress} className="w-64" />
          )}
        </div>
      </Card>
    </div>
  );
};
