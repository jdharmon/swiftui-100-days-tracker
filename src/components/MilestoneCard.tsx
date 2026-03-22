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
          ? "border-blue-300 bg-blue-50"
          : "border-blue-200 bg-blue-50/50"
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        {/* Trophy icon */}
        <span className="flex-shrink-0 text-lg" aria-hidden="true">
          🏅
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono font-bold text-blue-500">
              Day {day.day}
            </span>
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Milestone
            </span>
          </div>
          <h3
            className={`text-sm font-semibold leading-snug ${
              allDone ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {day.title}
          </h3>
        </div>

        {allDone && (
          <span className="flex-shrink-0 text-blue-500" title="Completed">
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
