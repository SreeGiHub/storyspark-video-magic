
export type ProjectStatus = "Draft" | "Processing" | "Completed";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  createdAt: string;
  thumbnailUrl: string;
  imageCount: number;
  duration: number;
  folderId?: string;
}

export interface Folder {
  id: string;
  title: string;
  storyCount: number;
}
