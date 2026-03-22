import { CourseItem } from "@/types";

interface Props {
  item: CourseItem;
  index: number;
  day: number;
  completed: boolean;
  onComplete: (itemKey: string, day: number) => void;
  onUncomplete: (itemKey: string) => void;
}

export default function ContentItem({
  item,
  index,
  day,
  completed,
  onComplete,
  onUncomplete,
}: Props) {
  const icon = item.type === "challenge" ? "🏆" : "📖";

  return (
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

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => !completed && onComplete(item.key, day)}
        className={`flex items-center gap-2 text-sm transition-colors hover:text-accent ${
          completed ? "text-fg-dim line-through" : "text-fg"
        }`}
      >
        <span>{icon}</span>
        <span>{item.label}</span>
        <svg
          className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
