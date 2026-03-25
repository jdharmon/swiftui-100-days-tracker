"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { useProgress } from "@/hooks/useProgress";
import { COURSE_DATA } from "@/data/course";
import ProgressBar from "@/components/ProgressBar";
import ResetButton from "@/components/ResetButton";
import DayCard from "@/components/DayCard";
import MilestoneCard from "@/components/MilestoneCard";
import VideoModal from "@/components/VideoModal";
import LoginPage from "@/components/LoginPage";

function LoadingScreen() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-track rounded w-64" />
        <div className="h-4 bg-track rounded w-48" />
        <div className="h-3 bg-track rounded-full mt-6" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-surface border border-line rounded-lg" />
        ))}
      </div>
    </main>
  );
}

export default function Home() {
  const [userId, setUserId] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user?.id ?? null);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user?.id ?? null);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const progress = useProgress(userId);

  const firstIncompleteDay = progress.isLoading
    ? null
    : COURSE_DATA.find((day) => {
        if (day.isMilestone) return false;
        const trackable = day.items.filter((i) => i.type !== "content");
        return trackable.length > 0 && !trackable.every((i) => progress.progressMap[i.key]);
      })?.day ?? null;

  if (authLoading) return <LoadingScreen />;
  if (!userId) return <LoginPage />;
  if (progress.isLoading) return <LoadingScreen />;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-fg mb-1">
            100 Days of SwiftUI
          </h1>
          <p className="text-fg-mid text-sm">
            Paul Hudson&apos;s{" "}
            <a
              href="https://www.hackingwithswift.com/100/swiftui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-strong transition-colors"
            >
              Hacking with Swift
            </a>{" "}
            course — track your daily progress!
          </p>
          <p className="text-fg-mid text-sm mt-2">
            All course content, materials, and concepts presented on this site are the intellectual property of Paul Hudson, creator of <span className="italic">100 Days of SwiftUI</span>. This site is an independent tracker and is not affiliated with or endorsed by him.
          </p>
        </div>
        <a
          href="https://github.com/jdharmon/swiftui-100-days-tracker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          className="text-fg-dim hover:text-fg transition-colors ml-4 mt-1 shrink-0"
        >
          <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>

      {/* Progress bar — sticky on scroll */}
      <div id="sticky-progress" className="sticky top-0 z-10 bg-surface py-3 -mx-4 px-4 border-b border-line shadow-sm">
        <ProgressBar
          completed={progress.completedCount}
          total={progress.totalItems}
          percentage={progress.percentage}
        />
      </div>

      {/* Reset */}
      <div className="mb-8">
        <ResetButton onReset={progress.resetAll} />
      </div>

      {/* Day cards */}
      <div className="space-y-3">
        {COURSE_DATA.map((day) =>
          day.isMilestone ? (
            <MilestoneCard key={day.day} day={day} progress={progress} />
          ) : (
            <DayCard key={day.day} day={day} progress={progress} autoOpen={day.day === firstIncompleteDay} />
          )
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <p className="text-xs text-fg-dim">
          Progress is synced to your account — accessible from any device.
        </p>
        <button
          onClick={() => getSupabase().auth.signOut()}
          className="text-xs text-fg-dim hover:text-fg-mid transition-colors"
        >
          Sign out
        </button>
      </div>

      {/* Video modal */}
      {progress.activeVideoId && (
        <VideoModal
          videoId={progress.activeVideoId}
          onClose={() => progress.setActiveVideoId(null)}
        />
      )}
    </main>
  );
}
