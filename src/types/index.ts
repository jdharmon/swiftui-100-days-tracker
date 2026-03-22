export type ItemType = "content" | "video" | "challenge";

export interface CourseItem {
  key: string;       // e.g. "day-1-content", "day-1-video-1", "day-25-challenge"
  type: ItemType;
  label: string;
  url: string;       // hackingwithswift.com URL (content/challenge) or youtube URL (video)
  videoId?: string;  // YouTube video ID; undefined = open in new tab instead of modal
}

export interface CourseDay {
  day: number;
  title: string;
  isMilestone: boolean;
  items: CourseItem[];
}

export type ProgressMap = Record<string, boolean>; // item_key → completed
