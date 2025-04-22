
export type ProjectStatus = "Draft" | "Processing" | "Completed";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  createdAt: string;
  thumbnailUrl: string;
}
