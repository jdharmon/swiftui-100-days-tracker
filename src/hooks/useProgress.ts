"use client";

import { useEffect, useState, useCallback } from "react";
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

export function useProgress(userId: string | null): UseProgressReturn {
  const [isLoading, setIsLoading] = useState(true);
  const [progressMap, setProgressMap] = useState<ProgressMap>({});
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setProgressMap({});
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    progressLib
      .loadProgress(userId)
      .then((map) => {
        if (!cancelled) {
          setProgressMap(map);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const markComplete = useCallback(
    (itemKey: string, day: number) => {
      if (!userId || progressMap[itemKey]) return;
      setProgressMap((prev) => ({ ...prev, [itemKey]: true }));
      progressLib.markComplete(userId, itemKey, day).catch(() => {
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
      setProgressMap((prev) => {
        const next = { ...prev };
        delete next[itemKey];
        return next;
      });
      progressLib.markIncomplete(userId, itemKey).catch(() => {
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
  const percentage =
    TOTAL_ITEMS > 0 ? Math.round((completedCount / TOTAL_ITEMS) * 100) : 0;

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
