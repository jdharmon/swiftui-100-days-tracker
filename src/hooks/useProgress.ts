"use client";

import { useEffect, useState, useCallback } from "react";
import { ensureAnonymousSession } from "@/lib/auth";
import * as progressLib from "@/lib/progress";
import { TOTAL_ITEMS } from "@/data/course";
import { ProgressMap } from "@/types";

export interface UseProgressReturn {
  isLoading: boolean;
  progressMap: ProgressMap;
  completedCount: number;
  totalItems: number;
  percentage: number;
  activeVideoId: string | null;
  setActiveVideoId: (id: string | null) => void;
  markComplete: (itemKey: string, day: number) => void;
  markIncomplete: (itemKey: string) => void;
  resetAll: () => Promise<void>;
}

export function useProgress(): UseProgressReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<ProgressMap>({});
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function init() {
      try {
        const uid = await ensureAnonymousSession();
        const map = await progressLib.loadProgress(uid);
        if (!cancelled) {
          setUserId(uid);
          setProgressMap(map);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    init();
    return () => { cancelled = true; };
  }, []);

  const markComplete = useCallback(
    (itemKey: string, day: number) => {
      if (!userId || progressMap[itemKey]) return;
      // Optimistic update
      setProgressMap((prev) => ({ ...prev, [itemKey]: true }));
      progressLib.markComplete(userId, itemKey, day).catch(() => {
        // Roll back on failure
        setProgressMap((prev) => {
          const next = { ...prev };
          delete next[itemKey];
          return next;
        });
      });
    },
    [userId, progressMap]
  );

  const markIncomplete = useCallback(
    (itemKey: string) => {
      if (!userId || !progressMap[itemKey]) return;
      // Optimistic update
      setProgressMap((prev) => {
        const next = { ...prev };
        delete next[itemKey];
        return next;
      });
      progressLib.markIncomplete(userId, itemKey).catch(() => {
        // Roll back on failure
        setProgressMap((prev) => ({ ...prev, [itemKey]: true }));
      });
    },
    [userId, progressMap]
  );

  const resetAll = useCallback(async () => {
    if (!userId) return;
    const snapshot = progressMap;
    setProgressMap({});
    try {
      await progressLib.resetAll(userId);
    } catch {
      setProgressMap(snapshot);
    }
  }, [userId, progressMap]);

  const completedCount = Object.values(progressMap).filter(Boolean).length;
  const percentage = TOTAL_ITEMS > 0
    ? Math.round((completedCount / TOTAL_ITEMS) * 100)
    : 0;

  return {
    isLoading,
    progressMap,
    completedCount,
    totalItems: TOTAL_ITEMS,
    percentage,
    activeVideoId,
    setActiveVideoId,
    markComplete,
    markIncomplete,
    resetAll,
  };
}
