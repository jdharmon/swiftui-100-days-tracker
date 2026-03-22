import { CourseItem } from "@/types";

interface Props {
  item: CourseItem;
  day: number;
  completed: boolean;
  onComplete: (itemKey: string, day: number) => void;
  onUncomplete: (itemKey: string) => void;
  onPlayVideo: (videoId: string) => void;
}

export default function VideoItem({
  item,
  day,
  completed,
  onComplete,
  onUncomplete,
  onPlayVideo,
}: Props) {
  function handlePlay() {
    if (!completed) onComplete(item.key, day);
    if (item.videoId) {
      onPlayVideo(item.videoId);
    } else {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="flex items-center gap-3 group">
      <button
        onClick={() =>
          completed ? onUncomplete(item.key) : onComplete(item.key, day)
        }
        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          completed
            ? "bg-orange-500 border-orange-500"
            : "border-zinc-600 hover:border-orange-400"
        }`}
        aria-label={completed ? "Mark incomplete" : "Mark complete"}
      >
        {completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <button
        onClick={handlePlay}
        className={`flex items-center gap-2 text-sm transition-colors hover:text-orange-400 ${
          completed ? "text-zinc-500" : "text-zinc-200"
        }`}
      >
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            completed
              ? "bg-zinc-700"
              : "bg-orange-500/20 group-hover:bg-orange-500/30"
          }`}
        >
          <svg
            className={`w-3 h-3 ml-0.5 ${completed ? "text-zinc-500" : "text-orange-400"}`}
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3 2l7 4-7 4V2z" />
          </svg>
        </span>
        <span className={completed ? "line-through" : ""}>{item.label}</span>
      </button>
    </div>
  );
}
