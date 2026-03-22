import { CourseItem } from "@/types";

interface Props {
  item: CourseItem;
  index: number;
  day: number;
  completed: boolean;
  onComplete: (itemKey: string, day: number) => void;
  onUncomplete: (itemKey: string) => void;
  onPlayVideo: (videoId: string) => void;
}

export default function VideoItem({
  item,
  index,
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
    <div className="space-y-1.5">
      {/* Main row */}
      <div className="flex items-center gap-2 group">
        <span className="w-4 text-right text-xs text-fg-dim flex-shrink-0 select-none">
          {index}.
        </span>

        <button
          onClick={() => completed ? onUncomplete(item.key) : onComplete(item.key, day)}
          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            completed ? "bg-accent border-accent" : "border-line hover:border-accent"
          }`}
          aria-label={completed ? "Mark incomplete" : "Mark complete"}
        >
          {completed && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <button
          onClick={handlePlay}
          className={`flex items-center gap-2 text-sm transition-colors hover:text-accent ${
            completed ? "text-fg-dim" : "text-fg"
          }`}
        >
          <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            completed ? "bg-chip" : "bg-accent-dim group-hover:bg-accent-mid"
          }`}>
            <svg
              className={`w-3 h-3 ml-0.5 ${completed ? "text-fg-dim" : "text-accent"}`}
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M3 2l7 4-7 4V2z" />
            </svg>
          </span>
          <span className={completed ? "line-through" : ""}>{item.label}</span>
        </button>
      </div>

      {/* Subitems — optional readings and tests, no checkboxes */}
      {item.subitems?.map((sub, i) => (
        <div key={i} className="flex items-start gap-2 pl-7">
          <span className="text-fg-dim text-xs mt-0.5 flex-shrink-0">·</span>
          <a
            href={sub.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:text-accent transition-colors group/sub flex items-center gap-1 ${
              sub.type === "optional" ? "text-fg-dim" : "text-fg-mid"
            }`}
          >
            {sub.label}
            <svg className="w-2.5 h-2.5 opacity-0 group-hover/sub:opacity-50 transition-opacity flex-shrink-0" fill="none" viewBox="0 0 12 12">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
