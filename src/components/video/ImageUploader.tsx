
import React from 'react';
import { Upload } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ImageUploaderProps {
  images: { id: string; url: string }[];
  setImages: React.Dispatch<React.SetStateAction<{ id: string; url: string }[]>>;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages }) => {
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
          {images.map((image) => (
            <div key={image.id} className="relative rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt="Uploaded preview"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
