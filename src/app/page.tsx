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
        <div className="h-8 bg-gray-200 rounded w-64" />
        <div className="h-4 bg-gray-200 rounded w-48" />
        <div className="h-3 bg-gray-200 rounded-full mt-6" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-white border border-gray-200 rounded-lg" />
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

  if (authLoading) return <LoadingScreen />;
  if (!userId) return <LoginPage />;
  if (progress.isLoading) return <LoadingScreen />;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">
          100 Days of SwiftUI
        </h1>
        <p className="text-gray-500 text-sm">
          Paul Hudson&apos;s{" "}
          <a
            href="https://www.hackingwithswift.com/100/swiftui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Hacking with Swift
          </a>{" "}
          course — track your daily progress
        </p>
      </div>

      {/* Progress bar */}
      <ProgressBar
        completed={progress.completedCount}
        total={progress.totalItems}
        percentage={progress.percentage}
      />

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
            <DayCard key={day.day} day={day} progress={progress} />
          )
        )}
      </div>

      {/* Footer */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <p className="text-xs text-gray-400">
          Progress is synced to your account — accessible from any device.
        </p>
        <button
          onClick={() => getSupabase().auth.signOut()}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
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
