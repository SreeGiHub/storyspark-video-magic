
import React from 'react';
import { Upload, MoveVertical } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ImageUploaderProps {
  images: { id: string; url: string }[];
  setImages: React.Dispatch<React.SetStateAction<{ id: string; url: string }[]>>;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages, onReorder }) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const url = e.target?.result as string;
          setImages(prev => [...prev, { id: crypto.randomUUID(), url }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-50');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-gray-50');
  };

  const handleDrop2 = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-50');
    const startIndex = Number(e.dataTransfer.getData('text/plain'));
    if (startIndex !== targetIndex) {
      onReorder(startIndex, targetIndex);
    }
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('opacity-50');
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#9b87f5] transition-colors"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-500">Drag and drop images or</p>
        <label className="mt-2 cursor-pointer text-sm text-[#9b87f5] hover:text-[#8674e1]">
          Browse
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={handleFileInput}
          />
        </label>
      </div>

      <ScrollArea className="h-[400px] rounded-md border border-gray-100 p-4">
        <div className="space-y-4">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative rounded-lg overflow-hidden border border-gray-200 cursor-move transition-all duration-200"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop2(e, index)}
              onDragEnd={handleDragEnd}
            >
              <img
                src={image.url}
                alt="Uploaded preview"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1">
                <MoveVertical className="h-5 w-5 text-gray-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-1 px-2 text-xs text-gray-700">
                Image {index + 1} - Drag to reorder
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
