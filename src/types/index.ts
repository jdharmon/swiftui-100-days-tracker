export type ItemType = "content" | "video" | "challenge";

export interface CourseSubItem {
  type: "optional" | "test";
  label: string;
  url: string;
}

export interface CourseItem {
  key: string;
  type: ItemType;
  label: string;
  url: string;
  videoId?: string;
  subitems?: CourseSubItem[]; // optional readings / tests — no checkbox
}

export interface CourseDay {
  day: number;
  title: string;
  isMilestone: boolean;
  url: string;
  items: CourseItem[];
}

export type ProgressMap = Record<string, boolean>; // item_key → completed
