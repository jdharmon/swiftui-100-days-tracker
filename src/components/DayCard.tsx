import { CourseDay } from "@/types";
import { UseProgressReturn } from "@/hooks/useProgress";
import ContentItem from "./ContentItem";
import VideoItem from "./VideoItem";

interface Props {
  day: CourseDay;
  progress: UseProgressReturn;
}

export default function DayCard({ day, progress }: Props) {
  const allDone = day.items.every((item) => progress.progressMap[item.key]);
  const anyDone = day.items.some((item) => progress.progressMap[item.key]);

  return (
    <div
      className={`rounded-lg border p-4 transition-colors ${
        allDone
          ? "border-gray-200 bg-gray-50"
          : anyDone
          ? "border-gray-200 bg-white"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        {/* Day badge */}
        <span
          className={`flex-shrink-0 text-xs font-mono font-bold px-2 py-1 rounded ${
            allDone
              ? "bg-blue-50 text-blue-500"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Day {day.day}
        </span>

        {/* Title */}
        <h3
          className={`text-sm font-medium leading-snug ${
            allDone ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {day.title}
        </h3>

        {/* All-done checkmark */}
        {allDone && (
          <span className="flex-shrink-0 ml-auto text-blue-500" title="Completed">
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

      {/* Items */}
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
