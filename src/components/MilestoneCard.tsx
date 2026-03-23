"use client";

import { useState } from "react";
import { CourseDay } from "@/types";
import { UseProgressReturn } from "@/hooks/useProgress";
import ContentItem from "./ContentItem";

interface Props {
  day: CourseDay;
  progress: UseProgressReturn;
}

export default function MilestoneCard({ day, progress }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const allDone = day.items.length > 0 && day.items.every((i) => progress.progressMap[i.key]);
  const anyDone = day.items.some((i) => progress.progressMap[i.key]);

  return (
    <div className={`rounded-lg border-2 transition-colors ${
      allDone ? "border-accent-mid bg-accent-dim" : "border-accent-dim bg-accent-dim/50"
    }`}>
      {/* Clickable header */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <span className="flex-shrink-0 text-lg" aria-hidden="true">🏅</span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-mono font-bold text-accent">Day {day.day}</span>
            <span className="text-xs uppercase tracking-wider text-accent font-semibold opacity-70">
              Milestone
            </span>
          </div>
          <h3 className={`text-sm font-semibold leading-snug ${allDone ? "text-fg-dim" : "text-fg"}`}>
            {day.title}
          </h3>
        </div>

        {allDone && (
          <span className="flex-shrink-0 text-accent mt-0.5" title="Completed">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}

        <svg
          className={`flex-shrink-0 w-4 h-4 text-fg-dim transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 16 16"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-2 border-t border-accent-dim pt-3">
          <a
            href={day.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-mid hover:text-accent transition-colors"
          >
            <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 12 12">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Read: Day {day.day}
          </a>

          {day.items.map((item, idx) => (
            <ContentItem
              key={item.key}
              item={item}
              index={idx + 1}
              day={day.day}
              completed={!!progress.progressMap[item.key]}
              onComplete={progress.markComplete}
              onUncomplete={progress.markIncomplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
