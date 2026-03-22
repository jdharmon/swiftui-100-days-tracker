import { CourseDay } from "@/types";
import { UseProgressReturn } from "@/hooks/useProgress";
import ContentItem from "./ContentItem";
import VideoItem from "./VideoItem";

interface Props {
  day: CourseDay;
  progress: UseProgressReturn;
}

export default function MilestoneCard({ day, progress }: Props) {
  const allDone = day.items.every((item) => progress.progressMap[item.key]);

  return (
    <div
      className={`rounded-lg border-2 p-4 transition-colors ${
        allDone
          ? "border-amber-600/50 bg-amber-900/20"
          : "border-amber-600/30 bg-amber-900/10"
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        {/* Trophy icon */}
        <span className="flex-shrink-0 text-lg" aria-hidden="true">
          🏅
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono font-bold text-amber-500">
              Day {day.day}
            </span>
            <span className="text-xs uppercase tracking-wider text-amber-600/80 font-semibold">
              Milestone
            </span>
          </div>
          <h3
            className={`text-sm font-semibold leading-snug ${
              allDone ? "text-zinc-400" : "text-amber-100"
            }`}
          >
            {day.title}
          </h3>
        </div>

        {allDone && (
          <span className="flex-shrink-0 text-amber-500" title="Completed">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M5 8l2.5 2.5L11 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>

      <div className="space-y-2 pl-1">
        {day.items.map((item) =>
          item.type === "video" ? (
            <VideoItem
              key={item.key}
              item={item}
              day={day.day}
              completed={!!progress.progressMap[item.key]}
              onComplete={progress.markComplete}
              onUncomplete={progress.markIncomplete}
              onPlayVideo={progress.setActiveVideoId}
            />
          ) : (
            <ContentItem
              key={item.key}
              item={item}
              day={day.day}
              completed={!!progress.progressMap[item.key]}
              onComplete={progress.markComplete}
              onUncomplete={progress.markIncomplete}
            />
          )
        )}
      </div>
    </div>
  );
}
