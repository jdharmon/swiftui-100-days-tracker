import { getSupabase } from "./supabase";
import { ProgressMap } from "@/types";

export async function loadProgress(userId: string): Promise<ProgressMap> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("progress")
    .select("item_key, completed")
    .eq("user_id", userId);

  if (error) throw error;

  return Object.fromEntries(
    (data ?? []).map((row) => [row.item_key, row.completed])
  );
}

export async function markComplete(
  userId: string,
  itemKey: string,
  day: number
): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase.from("progress").upsert(
    { user_id: userId, item_key: itemKey, day, completed: true },
    { onConflict: "user_id,item_key" }
  );
  if (error) throw error;
}

export async function markIncomplete(
  userId: string,
  itemKey: string
): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase
    .from("progress")
    .delete()
    .eq("user_id", userId)
    .eq("item_key", itemKey);
  if (error) throw error;
}

export async function resetAll(userId: string): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase
    .from("progress")
    .delete()
    .eq("user_id", userId);
  if (error) throw error;
}
