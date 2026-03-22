import { CourseDay } from "@/types";

export const COURSE_DATA: CourseDay[] = [
  // ── Days 1–15: Swift fundamentals ──────────────────────────────────────────
  {
    day: 1,
    title: "Variables, constants, strings, and numbers",
    isMilestone: false,
    items: [
      { key: "day-1-content", type: "content", label: "Read: Day 1", url: "https://www.hackingwithswift.com/100/swiftui/1" },
      { key: "day-1-video-1", type: "video", label: "Watch: Variables and constants", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: "eXBDHB5FVVE" },
    ],
  },
  {
    day: 2,
    title: "Booleans, string interpolation, and checkpoint 1",
    isMilestone: false,
    items: [
      { key: "day-2-content", type: "content", label: "Read: Day 2", url: "https://www.hackingwithswift.com/100/swiftui/2" },
      { key: "day-2-video-1", type: "video", label: "Watch: Booleans", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 3,
    title: "Arrays, dictionaries, sets, and enums",
    isMilestone: false,
    items: [
      { key: "day-3-content", type: "content", label: "Read: Day 3", url: "https://www.hackingwithswift.com/100/swiftui/3" },
      { key: "day-3-video-1", type: "video", label: "Watch: Arrays, dictionaries, sets, and enums", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 4,
    title: "Type annotations and checkpoint 2",
    isMilestone: false,
    items: [
      { key: "day-4-content", type: "content", label: "Read: Day 4", url: "https://www.hackingwithswift.com/100/swiftui/4" },
      { key: "day-4-video-1", type: "video", label: "Watch: Type annotations", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 5,
    title: "If, switch, and the ternary operator",
    isMilestone: false,
    items: [
      { key: "day-5-content", type: "content", label: "Read: Day 5", url: "https://www.hackingwithswift.com/100/swiftui/5" },
      { key: "day-5-video-1", type: "video", label: "Watch: Conditions", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 6,
    title: "Loops, summary, and checkpoint 3",
    isMilestone: false,
    items: [
      { key: "day-6-content", type: "content", label: "Read: Day 6", url: "https://www.hackingwithswift.com/100/swiftui/6" },
      { key: "day-6-video-1", type: "video", label: "Watch: Loops", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 7,
    title: "Functions, parameters, and return values",
    isMilestone: false,
    items: [
      { key: "day-7-content", type: "content", label: "Read: Day 7", url: "https://www.hackingwithswift.com/100/swiftui/7" },
      { key: "day-7-video-1", type: "video", label: "Watch: Functions", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 8,
    title: "Default values, throwing functions, and checkpoint 4",
    isMilestone: false,
    items: [
      { key: "day-8-content", type: "content", label: "Read: Day 8", url: "https://www.hackingwithswift.com/100/swiftui/8" },
      { key: "day-8-video-1", type: "video", label: "Watch: Default values and throwing functions", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 9,
    title: "Closures, passing functions into functions, and checkpoint 5",
    isMilestone: false,
    items: [
      { key: "day-9-content", type: "content", label: "Read: Day 9", url: "https://www.hackingwithswift.com/100/swiftui/9" },
      { key: "day-9-video-1", type: "video", label: "Watch: Closures", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 10,
    title: "Structs, computed properties, and property observers",
    isMilestone: false,
    items: [
      { key: "day-10-content", type: "content", label: "Read: Day 10", url: "https://www.hackingwithswift.com/100/swiftui/10" },
      { key: "day-10-video-1", type: "video", label: "Watch: Structs", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 11,
    title: "Access control, static properties and methods, and checkpoint 6",
    isMilestone: false,
    items: [
      { key: "day-11-content", type: "content", label: "Read: Day 11", url: "https://www.hackingwithswift.com/100/swiftui/11" },
      { key: "day-11-video-1", type: "video", label: "Watch: Access control and static members", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 12,
    title: "Classes, inheritance, and checkpoint 7",
    isMilestone: false,
    items: [
      { key: "day-12-content", type: "content", label: "Read: Day 12", url: "https://www.hackingwithswift.com/100/swiftui/12" },
      { key: "day-12-video-1", type: "video", label: "Watch: Classes and inheritance", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 13,
    title: "Protocols, extensions, and checkpoint 8",
    isMilestone: false,
    items: [
      { key: "day-13-content", type: "content", label: "Read: Day 13", url: "https://www.hackingwithswift.com/100/swiftui/13" },
      { key: "day-13-video-1", type: "video", label: "Watch: Protocols and extensions", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 14,
    title: "Optionals, nil coalescing, and checkpoint 9",
    isMilestone: false,
    items: [
      { key: "day-14-content", type: "content", label: "Read: Day 14", url: "https://www.hackingwithswift.com/100/swiftui/14" },
      { key: "day-14-video-1", type: "video", label: "Watch: Optionals", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 15,
    title: "Swift review",
    isMilestone: false,
    items: [
      { key: "day-15-content", type: "content", label: "Read: Day 15", url: "https://www.hackingwithswift.com/100/swiftui/15" },
    ],
  },

  // ── Days 16–18: Project 1 – WeSplit ────────────────────────────────────────
  {
    day: 16,
    title: "Project 1: WeSplit — introduction",
    isMilestone: false,
    items: [
      { key: "day-16-content", type: "content", label: "Read: Day 16", url: "https://www.hackingwithswift.com/100/swiftui/16" },
      { key: "day-16-video-1", type: "video", label: "Watch: WeSplit introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 17,
    title: "Project 1: WeSplit — building the app",
    isMilestone: false,
    items: [
      { key: "day-17-content", type: "content", label: "Read: Day 17", url: "https://www.hackingwithswift.com/100/swiftui/17" },
      { key: "day-17-video-1", type: "video", label: "Watch: Building WeSplit", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 18,
    title: "Project 1: WeSplit — wrap up",
    isMilestone: false,
    items: [
      { key: "day-18-content", type: "content", label: "Read: Day 18", url: "https://www.hackingwithswift.com/100/swiftui/18" },
      { key: "day-18-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/18" },
    ],
  },

  // ── Day 19: Challenge day ──────────────────────────────────────────────────
  {
    day: 19,
    title: "Challenge day: Unit Converter",
    isMilestone: false,
    items: [
      { key: "day-19-content", type: "content", label: "Read: Day 19", url: "https://www.hackingwithswift.com/100/swiftui/19" },
      { key: "day-19-challenge", type: "challenge", label: "Build the Unit Converter app", url: "https://www.hackingwithswift.com/100/swiftui/19" },
    ],
  },

  // ── Days 20–22: Project 2 – Guess the Flag ────────────────────────────────
  {
    day: 20,
    title: "Project 2: Guess the Flag — introduction",
    isMilestone: false,
    items: [
      { key: "day-20-content", type: "content", label: "Read: Day 20", url: "https://www.hackingwithswift.com/100/swiftui/20" },
      { key: "day-20-video-1", type: "video", label: "Watch: Guess the Flag introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 21,
    title: "Project 2: Guess the Flag — building the app",
    isMilestone: false,
    items: [
      { key: "day-21-content", type: "content", label: "Read: Day 21", url: "https://www.hackingwithswift.com/100/swiftui/21" },
      { key: "day-21-video-1", type: "video", label: "Watch: Building Guess the Flag", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 22,
    title: "Project 2: Guess the Flag — wrap up",
    isMilestone: false,
    items: [
      { key: "day-22-content", type: "content", label: "Read: Day 22", url: "https://www.hackingwithswift.com/100/swiftui/22" },
      { key: "day-22-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/22" },
    ],
  },

  // ── Days 23–24: Project 3 – Views and Modifiers ───────────────────────────
  {
    day: 23,
    title: "Project 3: Views and Modifiers — introduction",
    isMilestone: false,
    items: [
      { key: "day-23-content", type: "content", label: "Read: Day 23", url: "https://www.hackingwithswift.com/100/swiftui/23" },
      { key: "day-23-video-1", type: "video", label: "Watch: Views and Modifiers", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 24,
    title: "Project 3: Views and Modifiers — wrap up",
    isMilestone: false,
    items: [
      { key: "day-24-content", type: "content", label: "Read: Day 24", url: "https://www.hackingwithswift.com/100/swiftui/24" },
      { key: "day-24-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/24" },
    ],
  },

  // ── Day 25: Milestone ─────────────────────────────────────────────────────
  {
    day: 25,
    title: "Milestone: Projects 1–3",
    isMilestone: true,
    items: [
      { key: "day-25-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/25" },
      { key: "day-25-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/25" },
    ],
  },

  // ── Days 26–28: Project 4 – BetterRest ────────────────────────────────────
  {
    day: 26,
    title: "Project 4: BetterRest — introduction",
    isMilestone: false,
    items: [
      { key: "day-26-content", type: "content", label: "Read: Day 26", url: "https://www.hackingwithswift.com/100/swiftui/26" },
      { key: "day-26-video-1", type: "video", label: "Watch: BetterRest introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 27,
    title: "Project 4: BetterRest — building the app",
    isMilestone: false,
    items: [
      { key: "day-27-content", type: "content", label: "Read: Day 27", url: "https://www.hackingwithswift.com/100/swiftui/27" },
      { key: "day-27-video-1", type: "video", label: "Watch: Building BetterRest", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 28,
    title: "Project 4: BetterRest — wrap up",
    isMilestone: false,
    items: [
      { key: "day-28-content", type: "content", label: "Read: Day 28", url: "https://www.hackingwithswift.com/100/swiftui/28" },
      { key: "day-28-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/28" },
    ],
  },

  // ── Days 29–31: Project 5 – Word Scramble ─────────────────────────────────
  {
    day: 29,
    title: "Project 5: Word Scramble — introduction",
    isMilestone: false,
    items: [
      { key: "day-29-content", type: "content", label: "Read: Day 29", url: "https://www.hackingwithswift.com/100/swiftui/29" },
      { key: "day-29-video-1", type: "video", label: "Watch: Word Scramble introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 30,
    title: "Project 5: Word Scramble — building the app",
    isMilestone: false,
    items: [
      { key: "day-30-content", type: "content", label: "Read: Day 30", url: "https://www.hackingwithswift.com/100/swiftui/30" },
      { key: "day-30-video-1", type: "video", label: "Watch: Building Word Scramble", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 31,
    title: "Project 5: Word Scramble — wrap up",
    isMilestone: false,
    items: [
      { key: "day-31-content", type: "content", label: "Read: Day 31", url: "https://www.hackingwithswift.com/100/swiftui/31" },
      { key: "day-31-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/31" },
    ],
  },

  // ── Days 32–34: Project 6 – Animations ────────────────────────────────────
  {
    day: 32,
    title: "Project 6: Animations — introduction",
    isMilestone: false,
    items: [
      { key: "day-32-content", type: "content", label: "Read: Day 32", url: "https://www.hackingwithswift.com/100/swiftui/32" },
      { key: "day-32-video-1", type: "video", label: "Watch: Animations introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 33,
    title: "Project 6: Animations — building the app",
    isMilestone: false,
    items: [
      { key: "day-33-content", type: "content", label: "Read: Day 33", url: "https://www.hackingwithswift.com/100/swiftui/33" },
      { key: "day-33-video-1", type: "video", label: "Watch: Building Animations", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 34,
    title: "Project 6: Animations — wrap up",
    isMilestone: false,
    items: [
      { key: "day-34-content", type: "content", label: "Read: Day 34", url: "https://www.hackingwithswift.com/100/swiftui/34" },
      { key: "day-34-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/34" },
    ],
  },

  // ── Day 35: Milestone ─────────────────────────────────────────────────────
  {
    day: 35,
    title: "Milestone: Projects 4–6",
    isMilestone: true,
    items: [
      { key: "day-35-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/35" },
      { key: "day-35-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/35" },
    ],
  },

  // ── Days 36–38: Project 7 – iExpense ──────────────────────────────────────
  {
    day: 36,
    title: "Project 7: iExpense — introduction",
    isMilestone: false,
    items: [
      { key: "day-36-content", type: "content", label: "Read: Day 36", url: "https://www.hackingwithswift.com/100/swiftui/36" },
      { key: "day-36-video-1", type: "video", label: "Watch: iExpense introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 37,
    title: "Project 7: iExpense — building the app",
    isMilestone: false,
    items: [
      { key: "day-37-content", type: "content", label: "Read: Day 37", url: "https://www.hackingwithswift.com/100/swiftui/37" },
      { key: "day-37-video-1", type: "video", label: "Watch: Building iExpense", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 38,
    title: "Project 7: iExpense — wrap up",
    isMilestone: false,
    items: [
      { key: "day-38-content", type: "content", label: "Read: Day 38", url: "https://www.hackingwithswift.com/100/swiftui/38" },
      { key: "day-38-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/38" },
    ],
  },

  // ── Days 39–42: Project 8 – Moonshot ──────────────────────────────────────
  {
    day: 39,
    title: "Project 8: Moonshot — introduction",
    isMilestone: false,
    items: [
      { key: "day-39-content", type: "content", label: "Read: Day 39", url: "https://www.hackingwithswift.com/100/swiftui/39" },
      { key: "day-39-video-1", type: "video", label: "Watch: Moonshot introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 40,
    title: "Project 8: Moonshot — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-40-content", type: "content", label: "Read: Day 40", url: "https://www.hackingwithswift.com/100/swiftui/40" },
      { key: "day-40-video-1", type: "video", label: "Watch: Moonshot part 1", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 41,
    title: "Project 8: Moonshot — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-41-content", type: "content", label: "Read: Day 41", url: "https://www.hackingwithswift.com/100/swiftui/41" },
      { key: "day-41-video-1", type: "video", label: "Watch: Moonshot part 2", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 42,
    title: "Project 8: Moonshot — wrap up",
    isMilestone: false,
    items: [
      { key: "day-42-content", type: "content", label: "Read: Day 42", url: "https://www.hackingwithswift.com/100/swiftui/42" },
      { key: "day-42-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/42" },
    ],
  },

  // ── Days 43–46: Project 9 – Drawing ───────────────────────────────────────
  {
    day: 43,
    title: "Project 9: Drawing — introduction",
    isMilestone: false,
    items: [
      { key: "day-43-content", type: "content", label: "Read: Day 43", url: "https://www.hackingwithswift.com/100/swiftui/43" },
      { key: "day-43-video-1", type: "video", label: "Watch: Drawing introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 44,
    title: "Project 9: Drawing — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-44-content", type: "content", label: "Read: Day 44", url: "https://www.hackingwithswift.com/100/swiftui/44" },
      { key: "day-44-video-1", type: "video", label: "Watch: Drawing part 1", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 45,
    title: "Project 9: Drawing — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-45-content", type: "content", label: "Read: Day 45", url: "https://www.hackingwithswift.com/100/swiftui/45" },
      { key: "day-45-video-1", type: "video", label: "Watch: Drawing part 2", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 46,
    title: "Project 9: Drawing — wrap up",
    isMilestone: false,
    items: [
      { key: "day-46-content", type: "content", label: "Read: Day 46", url: "https://www.hackingwithswift.com/100/swiftui/46" },
      { key: "day-46-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/46" },
    ],
  },

  // ── Day 47: Milestone ─────────────────────────────────────────────────────
  {
    day: 47,
    title: "Milestone: Projects 7–9",
    isMilestone: true,
    items: [
      { key: "day-47-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/47" },
      { key: "day-47-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/47" },
    ],
  },

  // ── Days 48–49: Project 10 – Cupcake Corner ───────────────────────────────
  {
    day: 48,
    title: "Project 10: Cupcake Corner — introduction",
    isMilestone: false,
    items: [
      { key: "day-48-content", type: "content", label: "Read: Day 48", url: "https://www.hackingwithswift.com/100/swiftui/48" },
      { key: "day-48-video-1", type: "video", label: "Watch: Cupcake Corner introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 49,
    title: "Project 10: Cupcake Corner — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-49-content", type: "content", label: "Read: Day 49", url: "https://www.hackingwithswift.com/100/swiftui/49" },
      { key: "day-49-video-1", type: "video", label: "Watch: Cupcake Corner part 1", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 50,
    title: "Project 10: Cupcake Corner — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-50-content", type: "content", label: "Read: Day 50", url: "https://www.hackingwithswift.com/100/swiftui/50" },
      { key: "day-50-video-1", type: "video", label: "Watch: Cupcake Corner part 2", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 51,
    title: "Project 10: Cupcake Corner — wrap up",
    isMilestone: false,
    items: [
      { key: "day-51-content", type: "content", label: "Read: Day 51", url: "https://www.hackingwithswift.com/100/swiftui/51" },
      { key: "day-51-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/51" },
    ],
  },

  // ── Days 52–54: Project 11 – Bookworm ─────────────────────────────────────
  {
    day: 52,
    title: "Project 11: Bookworm — introduction",
    isMilestone: false,
    items: [
      { key: "day-52-content", type: "content", label: "Read: Day 52", url: "https://www.hackingwithswift.com/100/swiftui/52" },
      { key: "day-52-video-1", type: "video", label: "Watch: Bookworm introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 53,
    title: "Project 11: Bookworm — building the app",
    isMilestone: false,
    items: [
      { key: "day-53-content", type: "content", label: "Read: Day 53", url: "https://www.hackingwithswift.com/100/swiftui/53" },
      { key: "day-53-video-1", type: "video", label: "Watch: Building Bookworm", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 54,
    title: "Project 11: Bookworm — wrap up",
    isMilestone: false,
    items: [
      { key: "day-54-content", type: "content", label: "Read: Day 54", url: "https://www.hackingwithswift.com/100/swiftui/54" },
      { key: "day-54-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/54" },
    ],
  },

  // ── Days 55–57: Project 12 – Core Data ────────────────────────────────────
  {
    day: 55,
    title: "Project 12: Core Data — introduction",
    isMilestone: false,
    items: [
      { key: "day-55-content", type: "content", label: "Read: Day 55", url: "https://www.hackingwithswift.com/100/swiftui/55" },
      { key: "day-55-video-1", type: "video", label: "Watch: Core Data introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 56,
    title: "Project 12: Core Data — building the app",
    isMilestone: false,
    items: [
      { key: "day-56-content", type: "content", label: "Read: Day 56", url: "https://www.hackingwithswift.com/100/swiftui/56" },
      { key: "day-56-video-1", type: "video", label: "Watch: Building Core Data app", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 57,
    title: "Project 12: Core Data — wrap up",
    isMilestone: false,
    items: [
      { key: "day-57-content", type: "content", label: "Read: Day 57", url: "https://www.hackingwithswift.com/100/swiftui/57" },
      { key: "day-57-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/57" },
    ],
  },

  // ── Days 58–59: Expanding skills ─────────────────────────────────────────
  {
    day: 58,
    title: "Project 12: SwiftData introduction",
    isMilestone: false,
    items: [
      { key: "day-58-content", type: "content", label: "Read: Day 58", url: "https://www.hackingwithswift.com/100/swiftui/58" },
      { key: "day-58-video-1", type: "video", label: "Watch: SwiftData introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 59,
    title: "Project 12: SwiftData — wrap up",
    isMilestone: false,
    items: [
      { key: "day-59-content", type: "content", label: "Read: Day 59", url: "https://www.hackingwithswift.com/100/swiftui/59" },
      { key: "day-59-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/59" },
    ],
  },

  // ── Day 60: Milestone ─────────────────────────────────────────────────────
  {
    day: 60,
    title: "Milestone: Projects 10–12",
    isMilestone: true,
    items: [
      { key: "day-60-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/60" },
      { key: "day-60-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/60" },
    ],
  },

  // ── Days 61–63: Project 13 – Instafilter ──────────────────────────────────
  {
    day: 61,
    title: "Project 13: Instafilter — introduction",
    isMilestone: false,
    items: [
      { key: "day-61-content", type: "content", label: "Read: Day 61", url: "https://www.hackingwithswift.com/100/swiftui/61" },
      { key: "day-61-video-1", type: "video", label: "Watch: Instafilter introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 62,
    title: "Project 13: Instafilter — building the app",
    isMilestone: false,
    items: [
      { key: "day-62-content", type: "content", label: "Read: Day 62", url: "https://www.hackingwithswift.com/100/swiftui/62" },
      { key: "day-62-video-1", type: "video", label: "Watch: Building Instafilter", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 63,
    title: "Project 13: Instafilter — wrap up",
    isMilestone: false,
    items: [
      { key: "day-63-content", type: "content", label: "Read: Day 63", url: "https://www.hackingwithswift.com/100/swiftui/63" },
      { key: "day-63-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/63" },
    ],
  },

  // ── Days 64–66: Project 14 – BucketList ───────────────────────────────────
  {
    day: 64,
    title: "Project 14: BucketList — introduction",
    isMilestone: false,
    items: [
      { key: "day-64-content", type: "content", label: "Read: Day 64", url: "https://www.hackingwithswift.com/100/swiftui/64" },
      { key: "day-64-video-1", type: "video", label: "Watch: BucketList introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 65,
    title: "Project 14: BucketList — building the app",
    isMilestone: false,
    items: [
      { key: "day-65-content", type: "content", label: "Read: Day 65", url: "https://www.hackingwithswift.com/100/swiftui/65" },
      { key: "day-65-video-1", type: "video", label: "Watch: Building BucketList", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 66,
    title: "Project 14: BucketList — wrap up",
    isMilestone: false,
    items: [
      { key: "day-66-content", type: "content", label: "Read: Day 66", url: "https://www.hackingwithswift.com/100/swiftui/66" },
      { key: "day-66-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/66" },
    ],
  },

  // ── Days 67–69: Project 15 – Accessibility ────────────────────────────────
  {
    day: 67,
    title: "Project 15: Accessibility — introduction",
    isMilestone: false,
    items: [
      { key: "day-67-content", type: "content", label: "Read: Day 67", url: "https://www.hackingwithswift.com/100/swiftui/67" },
      { key: "day-67-video-1", type: "video", label: "Watch: Accessibility introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 68,
    title: "Project 15: Accessibility — building the app",
    isMilestone: false,
    items: [
      { key: "day-68-content", type: "content", label: "Read: Day 68", url: "https://www.hackingwithswift.com/100/swiftui/68" },
      { key: "day-68-video-1", type: "video", label: "Watch: Building Accessibility app", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 69,
    title: "Project 15: Accessibility — wrap up",
    isMilestone: false,
    items: [
      { key: "day-69-content", type: "content", label: "Read: Day 69", url: "https://www.hackingwithswift.com/100/swiftui/69" },
      { key: "day-69-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/69" },
    ],
  },

  // ── Days 70–71: Expanding skills ──────────────────────────────────────────
  {
    day: 70,
    title: "Project 15: Accessibility part 2",
    isMilestone: false,
    items: [
      { key: "day-70-content", type: "content", label: "Read: Day 70", url: "https://www.hackingwithswift.com/100/swiftui/70" },
      { key: "day-70-video-1", type: "video", label: "Watch: Day 70", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 71,
    title: "Project 15: Accessibility — wrap up",
    isMilestone: false,
    items: [
      { key: "day-71-content", type: "content", label: "Read: Day 71", url: "https://www.hackingwithswift.com/100/swiftui/71" },
      { key: "day-71-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/71" },
    ],
  },

  // ── Days 72–73: Expanding skills ──────────────────────────────────────────
  {
    day: 72,
    title: "Project 15: Accessibility part 3",
    isMilestone: false,
    items: [
      { key: "day-72-content", type: "content", label: "Read: Day 72", url: "https://www.hackingwithswift.com/100/swiftui/72" },
      { key: "day-72-video-1", type: "video", label: "Watch: Day 72", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 73,
    title: "Project 15: Accessibility — challenges",
    isMilestone: false,
    items: [
      { key: "day-73-content", type: "content", label: "Read: Day 73", url: "https://www.hackingwithswift.com/100/swiftui/73" },
      { key: "day-73-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/73" },
    ],
  },

  // ── Days 74–76: Expanding skills ──────────────────────────────────────────
  {
    day: 74,
    title: "Project 15: Accessibility part 4",
    isMilestone: false,
    items: [
      { key: "day-74-content", type: "content", label: "Read: Day 74", url: "https://www.hackingwithswift.com/100/swiftui/74" },
      { key: "day-74-video-1", type: "video", label: "Watch: Day 74", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 75,
    title: "Project 15: Accessibility part 5",
    isMilestone: false,
    items: [
      { key: "day-75-content", type: "content", label: "Read: Day 75", url: "https://www.hackingwithswift.com/100/swiftui/75" },
      { key: "day-75-video-1", type: "video", label: "Watch: Day 75", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 76,
    title: "Project 15: Accessibility — wrap up",
    isMilestone: false,
    items: [
      { key: "day-76-content", type: "content", label: "Read: Day 76", url: "https://www.hackingwithswift.com/100/swiftui/76" },
      { key: "day-76-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/76" },
    ],
  },

  // ── Day 77: Milestone ─────────────────────────────────────────────────────
  {
    day: 77,
    title: "Milestone: Projects 13–15",
    isMilestone: true,
    items: [
      { key: "day-77-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/77" },
      { key: "day-77-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/77" },
    ],
  },

  // ── Days 78–80: Project 16 – Hot Prospects ────────────────────────────────
  {
    day: 78,
    title: "Project 16: Hot Prospects — introduction",
    isMilestone: false,
    items: [
      { key: "day-78-content", type: "content", label: "Read: Day 78", url: "https://www.hackingwithswift.com/100/swiftui/78" },
      { key: "day-78-video-1", type: "video", label: "Watch: Hot Prospects introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 79,
    title: "Project 16: Hot Prospects — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-79-content", type: "content", label: "Read: Day 79", url: "https://www.hackingwithswift.com/100/swiftui/79" },
      { key: "day-79-video-1", type: "video", label: "Watch: Hot Prospects part 1", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 80,
    title: "Project 16: Hot Prospects — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-80-content", type: "content", label: "Read: Day 80", url: "https://www.hackingwithswift.com/100/swiftui/80" },
      { key: "day-80-video-1", type: "video", label: "Watch: Hot Prospects part 2", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 81,
    title: "Project 16: Hot Prospects — wrap up",
    isMilestone: false,
    items: [
      { key: "day-81-content", type: "content", label: "Read: Day 81", url: "https://www.hackingwithswift.com/100/swiftui/81" },
      { key: "day-81-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/81" },
    ],
  },

  // ── Days 82–84: Project 17 – Flashzilla ───────────────────────────────────
  {
    day: 82,
    title: "Project 17: Flashzilla — introduction",
    isMilestone: false,
    items: [
      { key: "day-82-content", type: "content", label: "Read: Day 82", url: "https://www.hackingwithswift.com/100/swiftui/82" },
      { key: "day-82-video-1", type: "video", label: "Watch: Flashzilla introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 83,
    title: "Project 17: Flashzilla — building the app",
    isMilestone: false,
    items: [
      { key: "day-83-content", type: "content", label: "Read: Day 83", url: "https://www.hackingwithswift.com/100/swiftui/83" },
      { key: "day-83-video-1", type: "video", label: "Watch: Building Flashzilla", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 84,
    title: "Project 17: Flashzilla — wrap up",
    isMilestone: false,
    items: [
      { key: "day-84-content", type: "content", label: "Read: Day 84", url: "https://www.hackingwithswift.com/100/swiftui/84" },
      { key: "day-84-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/84" },
    ],
  },

  // ── Days 85–87: Project 18 – Layout and Geometry ─────────────────────────
  {
    day: 85,
    title: "Project 18: Layout and Geometry — introduction",
    isMilestone: false,
    items: [
      { key: "day-85-content", type: "content", label: "Read: Day 85", url: "https://www.hackingwithswift.com/100/swiftui/85" },
      { key: "day-85-video-1", type: "video", label: "Watch: Layout and Geometry introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 86,
    title: "Project 18: Layout and Geometry — building the app",
    isMilestone: false,
    items: [
      { key: "day-86-content", type: "content", label: "Read: Day 86", url: "https://www.hackingwithswift.com/100/swiftui/86" },
      { key: "day-86-video-1", type: "video", label: "Watch: Building Layout app", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 87,
    title: "Project 18: Layout and Geometry — wrap up",
    isMilestone: false,
    items: [
      { key: "day-87-content", type: "content", label: "Read: Day 87", url: "https://www.hackingwithswift.com/100/swiftui/87" },
      { key: "day-87-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/87" },
    ],
  },

  // ── Days 88–89: Expanding skills ──────────────────────────────────────────
  {
    day: 88,
    title: "Project 18: Layout and Geometry part 2",
    isMilestone: false,
    items: [
      { key: "day-88-content", type: "content", label: "Read: Day 88", url: "https://www.hackingwithswift.com/100/swiftui/88" },
      { key: "day-88-video-1", type: "video", label: "Watch: Day 88", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 89,
    title: "Project 18: Layout and Geometry — wrap up",
    isMilestone: false,
    items: [
      { key: "day-89-content", type: "content", label: "Read: Day 89", url: "https://www.hackingwithswift.com/100/swiftui/89" },
      { key: "day-89-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/89" },
    ],
  },

  // ── Days 90–94: Expanding skills ──────────────────────────────────────────
  {
    day: 90,
    title: "Project 18 continued",
    isMilestone: false,
    items: [
      { key: "day-90-content", type: "content", label: "Read: Day 90", url: "https://www.hackingwithswift.com/100/swiftui/90" },
      { key: "day-90-video-1", type: "video", label: "Watch: Day 90", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 91,
    title: "Project 18 continued",
    isMilestone: false,
    items: [
      { key: "day-91-content", type: "content", label: "Read: Day 91", url: "https://www.hackingwithswift.com/100/swiftui/91" },
      { key: "day-91-video-1", type: "video", label: "Watch: Day 91", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 92,
    title: "Project 18 continued",
    isMilestone: false,
    items: [
      { key: "day-92-content", type: "content", label: "Read: Day 92", url: "https://www.hackingwithswift.com/100/swiftui/92" },
      { key: "day-92-video-1", type: "video", label: "Watch: Day 92", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 93,
    title: "Project 18 continued",
    isMilestone: false,
    items: [
      { key: "day-93-content", type: "content", label: "Read: Day 93", url: "https://www.hackingwithswift.com/100/swiftui/93" },
      { key: "day-93-video-1", type: "video", label: "Watch: Day 93", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 94,
    title: "Project 18 — wrap up",
    isMilestone: false,
    items: [
      { key: "day-94-content", type: "content", label: "Read: Day 94", url: "https://www.hackingwithswift.com/100/swiftui/94" },
      { key: "day-94-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/94" },
    ],
  },

  // ── Day 95: Milestone ─────────────────────────────────────────────────────
  {
    day: 95,
    title: "Milestone: Projects 16–18",
    isMilestone: true,
    items: [
      { key: "day-95-content", type: "content", label: "Read: Milestone overview", url: "https://www.hackingwithswift.com/100/swiftui/95" },
      { key: "day-95-challenge", type: "challenge", label: "Complete the milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/95" },
    ],
  },

  // ── Days 96–99: Final project ──────────────────────────────────────────────
  {
    day: 96,
    title: "Final project — introduction",
    isMilestone: false,
    items: [
      { key: "day-96-content", type: "content", label: "Read: Day 96", url: "https://www.hackingwithswift.com/100/swiftui/96" },
      { key: "day-96-video-1", type: "video", label: "Watch: Final project introduction", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 97,
    title: "Final project — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-97-content", type: "content", label: "Read: Day 97", url: "https://www.hackingwithswift.com/100/swiftui/97" },
      { key: "day-97-video-1", type: "video", label: "Watch: Final project part 1", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 98,
    title: "Final project — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-98-content", type: "content", label: "Read: Day 98", url: "https://www.hackingwithswift.com/100/swiftui/98" },
      { key: "day-98-video-1", type: "video", label: "Watch: Final project part 2", url: "https://www.youtube.com/watch?v=eXBDHB5FVVE", videoId: undefined },
    ],
  },
  {
    day: 99,
    title: "Final project — wrap up",
    isMilestone: false,
    items: [
      { key: "day-99-content", type: "content", label: "Read: Day 99", url: "https://www.hackingwithswift.com/100/swiftui/99" },
      { key: "day-99-challenge", type: "challenge", label: "Complete the challenges", url: "https://www.hackingwithswift.com/100/swiftui/99" },
    ],
  },

  // ── Day 100: Wrap-up ──────────────────────────────────────────────────────
  {
    day: 100,
    title: "Wrap up — what now?",
    isMilestone: true,
    items: [
      { key: "day-100-content", type: "content", label: "Read: Day 100", url: "https://www.hackingwithswift.com/100/swiftui/100" },
    ],
  },
];

export const TOTAL_ITEMS = COURSE_DATA.reduce(
  (sum, day) => sum + day.items.length,
  0
);
