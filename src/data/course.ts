import { CourseDay } from "@/types";

export const COURSE_DATA: CourseDay[] = [
  // ── Days 1–15: Swift fundamentals ──────────────────────────────────────────
  {
    day: 1,
    title: "Variables, constants, strings, and numbers",
    isMilestone: false,
    items: [
      { key: "day-1-content", type: "content", label: "Read: Day 1", url: "https://www.hackingwithswift.com/100/swiftui/1" },
      { key: "day-1-video-1", type: "video", label: "Introduction: Why Swift?", url: "https://www.hackingwithswift.com/quick-start/beginners/why-swift" },
      { key: "day-1-video-2", type: "video", label: "Introduction: About this course", url: "https://www.hackingwithswift.com/quick-start/beginners/about-this-course" },
      { key: "day-1-video-3", type: "video", label: "Introduction: How to follow along", url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-follow-along" },
      {
        key: "day-1-video-4", type: "video", label: "How to create variables and constants",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-variables-and-constants",
        subitems: [
          { type: "optional", label: "Why does Swift have variables?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-variables" },
          { type: "optional", label: "Why does Swift have constants as well as variables?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-constants-as-well-as-variables" },
          { type: "test", label: "Test: Variables", url: "https://www.hackingwithswift.com/review/sixty/variables" },
          { type: "test", label: "Test: Constants", url: "https://www.hackingwithswift.com/review/sixty/constants" },
        ],
      },
      {
        key: "day-1-video-5", type: "video", label: "How to create strings",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-strings",
        subitems: [
          { type: "optional", label: "Why does Swift need multi-line strings?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-need-multi-line-strings" },
          { type: "test", label: "Test: Multi-line strings", url: "https://www.hackingwithswift.com/review/sixty/multi-line-strings" },
        ],
      },
      {
        key: "day-1-video-6", type: "video", label: "How to store whole numbers",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-store-whole-numbers",
        subitems: [
          { type: "test", label: "Test: Strings and integers", url: "https://www.hackingwithswift.com/review/sixty/strings-and-integers" },
        ],
      },
      {
        key: "day-1-video-7", type: "video", label: "How to store decimal numbers",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-store-decimal-numbers",
        subitems: [
          { type: "optional", label: "Why does Swift need both Doubles and Integers?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-need-both-doubles-and-integers" },
          { type: "optional", label: "Why is Swift a type-safe language?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-is-swift-a-type-safe-language" },
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Booleans, string interpolation, and checkpoint 1",
    isMilestone: false,
    items: [
      { key: "day-2-content", type: "content", label: "Read: Day 2", url: "https://www.hackingwithswift.com/100/swiftui/2" },
      {
        key: "day-2-video-1", type: "video", label: "How to store truth with Booleans",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-store-truth-with-booleans",
        subitems: [
          { type: "test", label: "Test: Doubles and Booleans", url: "https://www.hackingwithswift.com/review/sixty/doubles-and-booleans" },
        ],
      },
      {
        key: "day-2-video-2", type: "video", label: "How to join strings together",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-join-strings-together",
        subitems: [
          { type: "optional", label: "Why does Swift have string interpolation?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-string-interpolation" },
          { type: "test", label: "Test: String interpolation", url: "https://www.hackingwithswift.com/review/sixty/string-interpolation" },
        ],
      },
      { key: "day-2-video-3", type: "video", label: "Summary: Simple data", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-simple-data" },
      { key: "day-2-checkpoint", type: "challenge", label: "Checkpoint 1", url: "https://www.hackingwithswift.com/100/swiftui/2" },
    ],
  },
  {
    day: 3,
    title: "Arrays, dictionaries, sets, and enums",
    isMilestone: false,
    items: [
      { key: "day-3-content", type: "content", label: "Read: Day 3", url: "https://www.hackingwithswift.com/100/swiftui/3" },
      {
        key: "day-3-video-1", type: "video", label: "How to store ordered data in arrays",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-store-ordered-data-in-arrays",
        subitems: [
          { type: "optional", label: "Why does Swift have arrays?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-arrays" },
          { type: "test", label: "Test: Arrays", url: "https://www.hackingwithswift.com/review/sixty/arrays" },
        ],
      },
      {
        key: "day-3-video-2", type: "video", label: "How to store and find data in dictionaries",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-store-and-find-data-in-dictionaries",
        subitems: [
          { type: "optional", label: "Why does Swift have dictionaries as well as arrays?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-dictionaries-as-well-as-arrays" },
          { type: "optional", label: "Why does Swift have default values for dictionaries?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-default-values-for-dictionaries" },
          { type: "test", label: "Test: Dictionaries", url: "https://www.hackingwithswift.com/review/sixty/dictionaries" },
          { type: "test", label: "Test: Dictionary default values", url: "https://www.hackingwithswift.com/review/sixty/dictionary-default-values" },
        ],
      },
      {
        key: "day-3-video-3", type: "video", label: "How to use sets for fast data lookup",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-sets-for-fast-data-lookup",
        subitems: [
          { type: "optional", label: "Why are sets different from arrays in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-are-sets-different-from-arrays-in-swift" },
          { type: "test", label: "Test: Sets", url: "https://www.hackingwithswift.com/review/sixty/sets" },
        ],
      },
      {
        key: "day-3-video-4", type: "video", label: "How to create and use enums",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-and-use-enums",
        subitems: [
          { type: "optional", label: "Why does Swift need enums?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-need-enums" },
          { type: "test", label: "Test: Enumerations", url: "https://www.hackingwithswift.com/review/sixty/enumerations" },
        ],
      },
    ],
  },
  {
    day: 4,
    title: "Type annotations and checkpoint 2",
    isMilestone: false,
    items: [
      { key: "day-4-content", type: "content", label: "Read: Day 4", url: "https://www.hackingwithswift.com/100/swiftui/4" },
      {
        key: "day-4-video-1", type: "video", label: "How to use type annotations",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-type-annotations",
        subitems: [
          { type: "optional", label: "Why does Swift have type annotations?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-type-annotations" },
          { type: "optional", label: "Why would you want to create an empty collection?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-would-you-want-to-create-an-empty-collection" },
          { type: "test", label: "Test: Type annotations", url: "https://www.hackingwithswift.com/review/sixty/type-annotations" },
        ],
      },
      { key: "day-4-video-2", type: "video", label: "Summary: Complex data", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-complex-data" },
      { key: "day-4-checkpoint", type: "challenge", label: "Checkpoint 2", url: "https://www.hackingwithswift.com/100/swiftui/4" },
    ],
  },
  {
    day: 5,
    title: "If, switch, and the ternary operator",
    isMilestone: false,
    items: [
      { key: "day-5-content", type: "content", label: "Read: Day 5", url: "https://www.hackingwithswift.com/100/swiftui/5" },
      {
        key: "day-5-video-1", type: "video", label: "How to check a condition is true or false",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-check-a-condition-is-true-or-false",
        subitems: [
          { type: "optional", label: "How does Swift let us compare many types of data?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/how-does-swift-let-us-compare-many-types-of-data" },
        ],
      },
      {
        key: "day-5-video-2", type: "video", label: "How to check multiple conditions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-check-multiple-conditions",
        subitems: [
          { type: "optional", label: "What's the difference between if and else if?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/whats-the-difference-between-if-and-else-if" },
          { type: "test", label: "Test: Conditions", url: "https://www.hackingwithswift.com/review/sixty/conditions" },
          { type: "test", label: "Test: Combining conditions", url: "https://www.hackingwithswift.com/review/sixty/combining-conditions" },
        ],
      },
      {
        key: "day-5-video-3", type: "video", label: "How to use switch statements to check multiple conditions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-switch-statements-to-check-multiple-conditions",
        subitems: [
          { type: "optional", label: "When should you use switch statements rather than if?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-switch-statements-rather-than-if" },
          { type: "test", label: "Test: Switch statements", url: "https://www.hackingwithswift.com/review/sixty/switch-statements" },
        ],
      },
      {
        key: "day-5-video-4", type: "video", label: "How to use the ternary conditional operator for quick tests",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-the-ternary-conditional-operator-for-quick-tests",
        subitems: [
          { type: "optional", label: "When should you use the ternary operator in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-the-ternary-operator-in-swift" },
          { type: "test", label: "Test: The ternary operator", url: "https://www.hackingwithswift.com/review/sixty/the-ternary-operator" },
        ],
      },
    ],
  },
  {
    day: 6,
    title: "Loops, summary, and checkpoint 3",
    isMilestone: false,
    items: [
      {
        key: "day-6-content", type: "content", label: "Read: Day 6", url: "https://www.hackingwithswift.com/100/swiftui/6",
      },
      {
        key: "day-6-video-1",
        type: "video",
        label: "How to use a for loop to repeat work",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-a-for-loop-to-repeat-work",
        subitems: [
          { type: "optional", label: "Why does Swift use underscores with loops?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-use-underscores-with-loops" },
          { type: "optional", label: "Why does Swift have two range operators?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-two-range-operators" },
          { type: "test", label: "Test: For loops", url: "https://www.hackingwithswift.com/review/sixty/for-loops" },
        ],
      },
      {
        key: "day-6-video-2",
        type: "video",
        label: "How to use a while loop to repeat work",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-a-while-loop-to-repeat-work",
        subitems: [
          { type: "optional", label: "When should you use a while loop?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-a-while-loop" },
          { type: "test", label: "Test: While loops", url: "https://www.hackingwithswift.com/review/sixty/while-loops" },
        ],
      },
      {
        key: "day-6-video-3",
        type: "video",
        label: "How to skip loop items with break and continue",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-skip-loop-items-with-break-and-continue",
        subitems: [
          { type: "optional", label: "Why would you want to exit a loop?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-would-you-want-to-exit-a-loop" },
          { type: "optional", label: "Why does Swift have labeled statements?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-labeled-statements" },
          { type: "optional", label: "When to use break and when to use continue", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-to-use-break-and-when-to-use-continue" },
          { type: "test", label: "Test: Exiting loops", url: "https://www.hackingwithswift.com/review/sixty/exiting-loops" },
        ],
      },
      {
        key: "day-6-video-4",
        type: "video",
        label: "Summary: Conditions and loops",
        url: "https://www.hackingwithswift.com/quick-start/beginners/summary-conditions-and-loops",
      },
      {
        key: "day-6-checkpoint",
        type: "challenge",
        label: "Checkpoint 3",
        url: "https://www.hackingwithswift.com/100/swiftui/6",
      },
    ],
  },
  {
    day: 7,
    title: "Functions, parameters, and return values",
    isMilestone: false,
    items: [
      { key: "day-7-content", type: "content", label: "Read: Day 7", url: "https://www.hackingwithswift.com/100/swiftui/7" },
      {
        key: "day-7-video-1", type: "video", label: "How to reuse code with functions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-reuse-code-with-functions",
        subitems: [
          { type: "optional", label: "What code should be put in a function?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/what-code-should-be-put-in-a-function" },
          { type: "optional", label: "How many parameters should a function accept?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/how-many-parameters-should-a-function-accept" },
          { type: "test", label: "Test: Writing functions", url: "https://www.hackingwithswift.com/review/sixty/writing-functions" },
          { type: "test", label: "Test: Accepting parameters", url: "https://www.hackingwithswift.com/review/sixty/accepting-parameters" },
        ],
      },
      {
        key: "day-7-video-2", type: "video", label: "How to return values from functions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-return-values-from-functions",
        subitems: [
          { type: "optional", label: "When is the return keyword not needed in a Swift function?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-is-the-return-keyword-not-needed-in-a-swift-function" },
          { type: "test", label: "Test: Returning values", url: "https://www.hackingwithswift.com/review/sixty/returning-values" },
        ],
      },
      {
        key: "day-7-video-3", type: "video", label: "How to return multiple values from functions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-return-multiple-values-from-functions",
        subitems: [
          { type: "optional", label: "When should you use an array, a set, or a tuple in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-an-array-a-set-or-a-tuple-in-swift" },
          { type: "test", label: "Test: Tuples", url: "https://www.hackingwithswift.com/review/sixty/tuples" },
          { type: "test", label: "Test: Arrays vs sets vs tuples", url: "https://www.hackingwithswift.com/review/sixty/arrays-vs-sets-vs-tuples" },
        ],
      },
      {
        key: "day-7-video-4", type: "video", label: "How to customize parameter labels",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-customize-parameter-labels",
        subitems: [
          { type: "optional", label: "When should you omit a parameter label?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-omit-a-parameter-label" },
          { type: "test", label: "Test: Omitting parameter labels", url: "https://www.hackingwithswift.com/review/sixty/omitting-parameter-labels" },
        ],
      },
    ],
  },
  {
    day: 8,
    title: "Default values, throwing functions, and checkpoint 4",
    isMilestone: false,
    items: [
      { key: "day-8-content", type: "content", label: "Read: Day 8", url: "https://www.hackingwithswift.com/100/swiftui/8" },
      {
        key: "day-8-video-1", type: "video", label: "How to provide default values for parameters",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-provide-default-values-for-parameters",
        subitems: [
          { type: "optional", label: "When to use default parameters for functions", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-to-use-default-parameters-for-functions" },
          { type: "test", label: "Test: Default parameters", url: "https://www.hackingwithswift.com/review/sixty/default-parameters" },
        ],
      },
      {
        key: "day-8-video-2", type: "video", label: "How to handle errors in functions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-handle-errors-in-functions",
        subitems: [
          { type: "optional", label: "When should you write throwing functions?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-write-throwing-functions" },
          { type: "optional", label: "Why does Swift make us use try before every throwing function?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-make-us-use-try-before-every-throwing-function" },
          { type: "test", label: "Test: Writing throwing functions", url: "https://www.hackingwithswift.com/review/sixty/writing-throwing-functions" },
          { type: "test", label: "Test: Running throwing functions", url: "https://www.hackingwithswift.com/review/sixty/running-throwing-functions" },
        ],
      },
      { key: "day-8-video-3", type: "video", label: "Summary: Functions", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-functions" },
      { key: "day-8-checkpoint", type: "challenge", label: "Checkpoint 4", url: "https://www.hackingwithswift.com/100/swiftui/8" },
    ],
  },
  {
    day: 9,
    title: "Closures, passing functions into functions, and checkpoint 5",
    isMilestone: false,
    items: [
      { key: "day-9-content", type: "content", label: "Read: Day 9", url: "https://www.hackingwithswift.com/100/swiftui/9" },
      {
        key: "day-9-video-1", type: "video", label: "How to create and use closures",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-and-use-closures",
        subitems: [
          { type: "optional", label: "What the heck are closures and why does Swift love them so much?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/what-the-heck-are-closures-and-why-does-swift-love-them-so-much" },
          { type: "optional", label: "Why are Swift's closure parameters inside the braces?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-are-swifts-closure-parameters-inside-the-braces" },
          { type: "optional", label: "How do you return a value from a closure that takes no parameters?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/how-do-you-return-a-value-from-a-closure-that-takes-no-parameters" },
          { type: "test", label: "Test: Creating basic closures", url: "https://www.hackingwithswift.com/review/sixty/creating-basic-closures" },
          { type: "test", label: "Test: Accepting parameters in a closure", url: "https://www.hackingwithswift.com/review/sixty/accepting-parameters-in-a-closure" },
          { type: "test", label: "Test: Returning values from a closure", url: "https://www.hackingwithswift.com/review/sixty/returning-values-from-a-closure" },
        ],
      },
      {
        key: "day-9-video-2", type: "video", label: "How to use trailing closures and shorthand syntax",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-trailing-closures-and-shorthand-syntax",
        subitems: [
          { type: "optional", label: "Why does Swift have trailing closure syntax?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-trailing-closure-syntax" },
          { type: "optional", label: "When should you use shorthand parameter names?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-shorthand-parameter-names" },
          { type: "test", label: "Test: Shorthand parameter names", url: "https://www.hackingwithswift.com/review/sixty/shorthand-parameter-names" },
        ],
      },
      {
        key: "day-9-video-3", type: "video", label: "How to accept functions as parameters",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-accept-functions-as-parameters",
        subitems: [
          { type: "optional", label: "Why would you want to use closures as parameters?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-would-you-want-to-use-closures-as-parameters" },
          { type: "test", label: "Test: Closures as parameters", url: "https://www.hackingwithswift.com/review/sixty/closures-as-parameters" },
          { type: "test", label: "Test: Trailing closure syntax", url: "https://www.hackingwithswift.com/review/sixty/trailing-closure-syntax" },
        ],
      },
      { key: "day-9-video-4", type: "video", label: "Summary: Closures", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-closures" },
      { key: "day-9-checkpoint", type: "challenge", label: "Checkpoint 5", url: "https://www.hackingwithswift.com/100/swiftui/9" },
    ],
  },
  {
    day: 10,
    title: "Structs, computed properties, and property observers",
    isMilestone: false,
    items: [
      { key: "day-10-content", type: "content", label: "Read: Day 10", url: "https://www.hackingwithswift.com/100/swiftui/10" },
      {
        key: "day-10-video-1", type: "video", label: "How to create your own structs",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-your-own-structs",
        subitems: [
          { type: "optional", label: "What's the difference between a struct and a tuple?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/whats-the-difference-between-a-struct-and-a-tuple" },
          { type: "optional", label: "What's the difference between a function and a method?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/whats-the-difference-between-a-function-and-a-method" },
          { type: "optional", label: "Why do we need to mark some methods as mutating?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-do-we-need-to-mark-some-methods-as-mutating" },
          { type: "test", label: "Test: Creating your own structs", url: "https://www.hackingwithswift.com/review/sixty/creating-your-own-structs" },
          { type: "test", label: "Test: Mutating methods", url: "https://www.hackingwithswift.com/review/sixty/mutating-methods" },
        ],
      },
      {
        key: "day-10-video-2", type: "video", label: "How to compute property values dynamically",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-compute-property-values-dynamically",
        subitems: [
          { type: "optional", label: "When should you use a computed property or a stored property?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-a-computed-property-or-a-stored-property" },
          { type: "test", label: "Test: Computed properties", url: "https://www.hackingwithswift.com/review/sixty/computed-properties" },
        ],
      },
      {
        key: "day-10-video-3", type: "video", label: "How to take action when a property changes",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-take-action-when-a-property-changes",
        subitems: [
          { type: "optional", label: "When should you use property observers?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-property-observers" },
          { type: "optional", label: "When should you use willSet rather than didSet?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-willset-rather-than-didset" },
          { type: "test", label: "Test: Property observers", url: "https://www.hackingwithswift.com/review/sixty/property-observers" },
        ],
      },
      {
        key: "day-10-video-4", type: "video", label: "How to create custom initializers",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-custom-initializers",
        subitems: [
          { type: "optional", label: "How do Swift's memberwise initializers work?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/how-do-swifts-memberwise-initializers-work" },
          { type: "optional", label: "When would you use self in a method?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-would-you-use-self-in-a-method" },
          { type: "test", label: "Test: Initializers", url: "https://www.hackingwithswift.com/review/sixty/initializers" },
          { type: "test", label: "Test: Referring to the current instance", url: "https://www.hackingwithswift.com/review/sixty/referring-to-the-current-instance" },
        ],
      },
    ],
  },
  {
    day: 11,
    title: "Access control, static properties and methods, and checkpoint 6",
    isMilestone: false,
    items: [
      { key: "day-11-content", type: "content", label: "Read: Day 11", url: "https://www.hackingwithswift.com/100/swiftui/11" },
      {
        key: "day-11-video-1", type: "video", label: "How to limit access to internal data using access control",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-limit-access-to-internal-data-using-access-control",
        subitems: [
          { type: "optional", label: "What's the point of access control?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-access-control" },
          { type: "test", label: "Test: Access control", url: "https://www.hackingwithswift.com/review/sixty/access-control" },
        ],
      },
      {
        key: "day-11-video-2", type: "video", label: "How to create and use static properties and methods",
        url: "https://www.hackingwithswift.com/quick-start/beginners/static-properties-and-methods",
        subitems: [
          { type: "optional", label: "What's the point of static properties and methods in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-static-properties-and-methods-in-swift" },
          { type: "test", label: "Test: Static properties and methods", url: "https://www.hackingwithswift.com/review/sixty/static-properties-and-methods" },
        ],
      },
      { key: "day-11-video-3", type: "video", label: "Summary: Structs", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-structs" },
      { key: "day-11-checkpoint", type: "challenge", label: "Checkpoint 6", url: "https://www.hackingwithswift.com/100/swiftui/11" },
    ],
  },
  {
    day: 12,
    title: "Classes, inheritance, and checkpoint 7",
    isMilestone: false,
    items: [
      { key: "day-12-content", type: "content", label: "Read: Day 12", url: "https://www.hackingwithswift.com/100/swiftui/12" },
      {
        key: "day-12-video-1", type: "video", label: "How to create your own classes",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-your-own-classes",
        subitems: [
          { type: "optional", label: "Why does Swift have both classes and structs?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-both-classes-and-structs" },
          { type: "optional", label: "Why don't Swift classes have a memberwise initializer?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-dont-swift-classes-have-a-memberwise-initializer" },
          { type: "test", label: "Test: Creating your own classes", url: "https://www.hackingwithswift.com/review/sixty/creating-your-own-classes" },
        ],
      },
      {
        key: "day-12-video-2", type: "video", label: "How to make one class inherit from another",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-make-one-class-inherit-from-another",
        subitems: [
          { type: "optional", label: "When would you want to override a method?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-would-you-want-to-override-a-method" },
          { type: "optional", label: "Which classes should be declared as final?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/which-classes-should-be-declared-as-final" },
          { type: "test", label: "Test: Class inheritance", url: "https://www.hackingwithswift.com/review/sixty/class-inheritance" },
        ],
      },
      { key: "day-12-video-3", type: "video", label: "How to add initializers for classes", url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-add-initializers-for-classes" },
      {
        key: "day-12-video-4", type: "video", label: "How to copy classes",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-copy-classes",
        subitems: [
          { type: "optional", label: "Why do copies of a class share their data?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-do-copies-of-a-class-share-their-data" },
          { type: "test", label: "Test: Copying objects", url: "https://www.hackingwithswift.com/review/sixty/copying-objects" },
        ],
      },
      {
        key: "day-12-video-5", type: "video", label: "How to create a deinitializer for a class",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-a-deinitializer-for-a-class",
        subitems: [
          { type: "optional", label: "Why do classes have deinitializers and structs don't?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-do-classes-have-deinitializers-and-structs-dont" },
          { type: "test", label: "Test: Deinitializers", url: "https://www.hackingwithswift.com/review/sixty/deinitializers" },
        ],
      },
      {
        key: "day-12-video-6", type: "video", label: "How to work with variables inside classes",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-work-with-variables-inside-classes",
        subitems: [
          { type: "optional", label: "Why can variable properties in constant classes be changed?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-can-variable-properties-in-constant-classes-be-changed" },
          { type: "test", label: "Test: Mutability", url: "https://www.hackingwithswift.com/review/sixty/mutability" },
        ],
      },
      { key: "day-12-video-7", type: "video", label: "Summary: Classes", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-classes" },
      { key: "day-12-checkpoint", type: "challenge", label: "Checkpoint 7", url: "https://www.hackingwithswift.com/100/swiftui/12" },
    ],
  },
  {
    day: 13,
    title: "Protocols, extensions, and checkpoint 8",
    isMilestone: false,
    items: [
      { key: "day-13-content", type: "content", label: "Read: Day 13", url: "https://www.hackingwithswift.com/100/swiftui/13" },
      {
        key: "day-13-video-1", type: "video", label: "How to create and use protocols",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-and-use-protocols",
        subitems: [
          { type: "optional", label: "Why does Swift need protocols?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-need-protocols" },
          { type: "test", label: "Test: Protocols", url: "https://www.hackingwithswift.com/review/sixty/protocols" },
        ],
      },
      { key: "day-13-video-2", type: "video", label: "How to use opaque return types", url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-use-opaque-return-types" },
      {
        key: "day-13-video-3", type: "video", label: "How to create and use extensions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-and-use-extensions",
        subitems: [
          { type: "optional", label: "When should you use extensions in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-extensions-in-swift" },
          { type: "test", label: "Test: Extensions", url: "https://www.hackingwithswift.com/review/sixty/extensions" },
        ],
      },
      {
        key: "day-13-video-4", type: "video", label: "How to create and use protocol extensions",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-create-and-use-protocol-extensions",
        subitems: [
          { type: "optional", label: "When are protocol extensions useful in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-are-protocol-extensions-useful-in-swift" },
          { type: "test", label: "Test: Protocol extensions", url: "https://www.hackingwithswift.com/review/sixty/protocol-extensions" },
        ],
      },
      { key: "day-13-video-5", type: "video", label: "Summary: Protocols and extensions", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-protocols-and-extensions" },
      { key: "day-13-checkpoint", type: "challenge", label: "Checkpoint 8", url: "https://www.hackingwithswift.com/100/swiftui/13" },
    ],
  },
  {
    day: 14,
    title: "Optionals, nil coalescing, and checkpoint 9",
    isMilestone: false,
    items: [
      { key: "day-14-content", type: "content", label: "Read: Day 14", url: "https://www.hackingwithswift.com/100/swiftui/14" },
      {
        key: "day-14-video-1", type: "video", label: "How to handle missing data with optionals",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-handle-missing-data-with-optionals",
        subitems: [
          { type: "optional", label: "Why does Swift have optionals?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-have-optionals" },
          { type: "optional", label: "Why does Swift make us unwrap optionals?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-does-swift-make-us-unwrap-optionals" },
          { type: "test", label: "Test: Unwrapping optionals", url: "https://www.hackingwithswift.com/review/sixty/unwrapping-optionals" },
        ],
      },
      {
        key: "day-14-video-2", type: "video", label: "How to unwrap optionals with guard",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-unwrap-optionals-with-guard",
        subitems: [
          { type: "optional", label: "When to use guard let rather than if let", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-to-use-guard-let-rather-than-if-let" },
          { type: "test", label: "Test: Unwrapping with guard", url: "https://www.hackingwithswift.com/review/sixty/unwrapping-with-guard" },
        ],
      },
      {
        key: "day-14-video-3", type: "video", label: "How to unwrap optionals with nil coalescing",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-unwrap-optionals-with-nil-coalescing",
        subitems: [
          { type: "optional", label: "When should you use nil coalescing in Swift?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-nil-coalescing-in-swift" },
          { type: "test", label: "Test: Nil coalescing", url: "https://www.hackingwithswift.com/review/sixty/nil-coalescing" },
        ],
      },
      {
        key: "day-14-video-4", type: "video", label: "How to handle multiple optionals using optional chaining",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-handle-multiple-optionals-using-optional-chaining",
        subitems: [
          { type: "optional", label: "Why is optional chaining so important?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/why-is-optional-chaining-so-important" },
          { type: "test", label: "Test: Optional chaining", url: "https://www.hackingwithswift.com/review/sixty/optional-chaining" },
        ],
      },
      {
        key: "day-14-video-5", type: "video", label: "How to handle function failure with optionals",
        url: "https://www.hackingwithswift.com/quick-start/beginners/how-to-handle-function-failure-with-optionals",
        subitems: [
          { type: "optional", label: "When should you use optional try?", url: "https://www.hackingwithswift.com/quick-start/understanding-swift/when-should-you-use-optional-try" },
          { type: "test", label: "Test: Optional try", url: "https://www.hackingwithswift.com/review/sixty/optional-try" },
        ],
      },
      { key: "day-14-video-6", type: "video", label: "Summary: Optionals", url: "https://www.hackingwithswift.com/quick-start/beginners/summary-optionals" },
      { key: "day-14-checkpoint", type: "challenge", label: "Checkpoint 9", url: "https://www.hackingwithswift.com/100/swiftui/14" },
    ],
  },
  {
    day: 15,
    title: "Swift review",
    isMilestone: false,
    items: [
      { key: "day-15-content", type: "content", label: "Read: Day 15", url: "https://www.hackingwithswift.com/100/swiftui/15" },
      { key: "day-15-video-1", type: "video", label: "Swift review: Learn essential Swift in one hour", url: "https://www.hackingwithswift.com/articles/242/learn-essential-swift-in-one-hour" },
    ],
  },

  // ── Days 16–18: Project 1 – WeSplit ────────────────────────────────────────
  {
    day: 16,
    title: "Project 1: WeSplit — introduction",
    isMilestone: false,
    items: [
      { key: "day-16-content", type: "content", label: "Read: Day 16", url: "https://www.hackingwithswift.com/100/swiftui/16" },
      { key: "day-16-video-1", type: "video", label: "WeSplit: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/wesplit-introduction" },
      { key: "day-16-video-2", type: "video", label: "Understanding the basic structure of a SwiftUI app", url: "https://www.hackingwithswift.com/books/ios-swiftui/understanding-the-basic-structure-of-a-swiftui-app" },
      { key: "day-16-video-3", type: "video", label: "Creating a form", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-a-form" },
      { key: "day-16-video-4", type: "video", label: "Adding a navigation bar", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-a-navigation-bar" },
      { key: "day-16-video-5", type: "video", label: "Modifying program state", url: "https://www.hackingwithswift.com/books/ios-swiftui/modifying-program-state" },
      { key: "day-16-video-6", type: "video", label: "Binding state to user interface controls", url: "https://www.hackingwithswift.com/books/ios-swiftui/binding-state-to-user-interface-controls" },
      { key: "day-16-video-7", type: "video", label: "Creating views in a loop", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-views-in-a-loop" },
    ],
  },
  {
    day: 17,
    title: "Project 1: WeSplit — building the app",
    isMilestone: false,
    items: [
      { key: "day-17-content", type: "content", label: "Read: Day 17", url: "https://www.hackingwithswift.com/100/swiftui/17" },
      { key: "day-17-video-1", type: "video", label: "Reading text from the user with TextField", url: "https://www.hackingwithswift.com/books/ios-swiftui/reading-text-from-the-user-with-textfield" },
      { key: "day-17-video-2", type: "video", label: "Creating pickers in a form", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-pickers-in-a-form" },
      { key: "day-17-video-3", type: "video", label: "Adding a segmented control for tip percentages", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-a-segmented-control-for-tip-percentages" },
      { key: "day-17-video-4", type: "video", label: "Calculating the total per person", url: "https://www.hackingwithswift.com/books/ios-swiftui/calculating-the-total-per-person" },
      { key: "day-17-video-5", type: "video", label: "Hiding the keyboard", url: "https://www.hackingwithswift.com/books/ios-swiftui/hiding-the-keyboard" },
    ],
  },
  {
    day: 18,
    title: "Project 1: WeSplit — wrap up",
    isMilestone: false,
    items: [
      { key: "day-18-content", type: "content", label: "Read: Day 18", url: "https://www.hackingwithswift.com/100/swiftui/18" },
      { key: "day-18-challenge", type: "challenge", label: "WeSplit: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/18" },
    ],
  },

  // ── Day 19: Challenge day ──────────────────────────────────────────────────
  {
    day: 19,
    title: "Challenge day: Unit Converter",
    isMilestone: false,
    items: [
      { key: "day-19-content", type: "content", label: "Read: Day 19", url: "https://www.hackingwithswift.com/100/swiftui/19" },
      { key: "day-19-challenge", type: "challenge", label: "Build a unit converter app", url: "https://www.hackingwithswift.com/100/swiftui/19" },
    ],
  },

  // ── Days 20–22: Project 2 – Guess the Flag ────────────────────────────────
  {
    day: 20,
    title: "Project 2: Guess the Flag — introduction",
    isMilestone: false,
    items: [
      { key: "day-20-content", type: "content", label: "Read: Day 20", url: "https://www.hackingwithswift.com/100/swiftui/20" },
      { key: "day-20-video-1", type: "video", label: "Guess the Flag: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/guess-the-flag-introduction" },
      { key: "day-20-video-2", type: "video", label: "Using stacks to arrange views", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-stacks-to-arrange-views" },
      { key: "day-20-video-3", type: "video", label: "Colors and frames", url: "https://www.hackingwithswift.com/books/ios-swiftui/colors-and-frames" },
      { key: "day-20-video-4", type: "video", label: "Gradients", url: "https://www.hackingwithswift.com/books/ios-swiftui/gradients" },
      { key: "day-20-video-5", type: "video", label: "Buttons and images", url: "https://www.hackingwithswift.com/books/ios-swiftui/buttons-and-images" },
      { key: "day-20-video-6", type: "video", label: "Showing alert messages", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-alert-messages" },
    ],
  },
  {
    day: 21,
    title: "Project 2: Guess the Flag — building the app",
    isMilestone: false,
    items: [
      { key: "day-21-content", type: "content", label: "Read: Day 21", url: "https://www.hackingwithswift.com/100/swiftui/21" },
      { key: "day-21-video-1", type: "video", label: "Stacking up buttons", url: "https://www.hackingwithswift.com/books/ios-swiftui/stacking-up-buttons" },
      { key: "day-21-video-2", type: "video", label: "Showing the player's score with an alert", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-the-players-score-with-an-alert" },
      { key: "day-21-video-3", type: "video", label: "Styling our flags", url: "https://www.hackingwithswift.com/books/ios-swiftui/styling-our-flags" },
      { key: "day-21-video-4", type: "video", label: "Upgrading our design", url: "https://www.hackingwithswift.com/books/ios-swiftui/upgrading-our-design" },
    ],
  },
  {
    day: 22,
    title: "Project 2: Guess the Flag — wrap up",
    isMilestone: false,
    items: [
      { key: "day-22-content", type: "content", label: "Read: Day 22", url: "https://www.hackingwithswift.com/100/swiftui/22" },
      { key: "day-22-challenge", type: "challenge", label: "Guess the Flag: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/22" },
    ],
  },

  // ── Days 23–24: Project 3 – Views and Modifiers ───────────────────────────
  {
    day: 23,
    title: "Project 3: Views and Modifiers",
    isMilestone: false,
    items: [
      { key: "day-23-content", type: "content", label: "Read: Day 23", url: "https://www.hackingwithswift.com/100/swiftui/23" },
      { key: "day-23-video-1", type: "video", label: "Views and modifiers: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/views-and-modifiers-introduction" },
      { key: "day-23-video-2", type: "video", label: "Why does SwiftUI use structs for views?", url: "https://www.hackingwithswift.com/books/ios-swiftui/why-does-swiftui-use-structs-for-views" },
      { key: "day-23-video-3", type: "video", label: "What is behind the main SwiftUI view?", url: "https://www.hackingwithswift.com/books/ios-swiftui/what-is-behind-the-main-swiftui-view" },
      { key: "day-23-video-4", type: "video", label: "Why modifier order matters", url: "https://www.hackingwithswift.com/books/ios-swiftui/why-modifier-order-matters" },
      { key: "day-23-video-5", type: "video", label: "Why does SwiftUI use \"some View\" for its view type?", url: "https://www.hackingwithswift.com/books/ios-swiftui/why-does-swiftui-use-some-view-for-its-view-type" },
      { key: "day-23-video-6", type: "video", label: "Conditional modifiers", url: "https://www.hackingwithswift.com/books/ios-swiftui/conditional-modifiers" },
      { key: "day-23-video-7", type: "video", label: "Environment modifiers", url: "https://www.hackingwithswift.com/books/ios-swiftui/environment-modifiers" },
      { key: "day-23-video-8", type: "video", label: "Views as properties", url: "https://www.hackingwithswift.com/books/ios-swiftui/views-as-properties" },
      { key: "day-23-video-9", type: "video", label: "View composition", url: "https://www.hackingwithswift.com/books/ios-swiftui/view-composition" },
      { key: "day-23-video-10", type: "video", label: "Custom modifiers", url: "https://www.hackingwithswift.com/books/ios-swiftui/custom-modifiers" },
      { key: "day-23-video-11", type: "video", label: "Custom containers", url: "https://www.hackingwithswift.com/books/ios-swiftui/custom-containers" },
    ],
  },
  {
    day: 24,
    title: "Project 3: Views and Modifiers — wrap up",
    isMilestone: false,
    items: [
      { key: "day-24-content", type: "content", label: "Read: Day 24", url: "https://www.hackingwithswift.com/100/swiftui/24" },
      { key: "day-24-challenge", type: "challenge", label: "Views and modifiers: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/24" },
    ],
  },

  // ── Day 25: Milestone ─────────────────────────────────────────────────────
  {
    day: 25,
    title: "Milestone: Projects 1–3",
    isMilestone: true,
    items: [
      { key: "day-25-content", type: "content", label: "Read: Day 25", url: "https://www.hackingwithswift.com/100/swiftui/25" },
      { key: "day-25-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/2/1/what-you-learned" },
      { key: "day-25-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/2/2/key-points" },
      { key: "day-25-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/25" },
    ],
  },

  // ── Days 26–28: Project 4 – BetterRest ────────────────────────────────────
  {
    day: 26,
    title: "Project 4: BetterRest — introduction",
    isMilestone: false,
    items: [
      { key: "day-26-content", type: "content", label: "Read: Day 26", url: "https://www.hackingwithswift.com/100/swiftui/26" },
      { key: "day-26-video-1", type: "video", label: "BetterRest: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/betterrest-introduction" },
      { key: "day-26-video-2", type: "video", label: "Entering numbers with Stepper", url: "https://www.hackingwithswift.com/books/ios-swiftui/entering-numbers-with-stepper" },
      { key: "day-26-video-3", type: "video", label: "Selecting dates and times with DatePicker", url: "https://www.hackingwithswift.com/books/ios-swiftui/selecting-dates-and-times-with-datepicker" },
      { key: "day-26-video-4", type: "video", label: "Working with dates", url: "https://www.hackingwithswift.com/books/ios-swiftui/working-with-dates" },
      { key: "day-26-video-5", type: "video", label: "Training a model with Create ML", url: "https://www.hackingwithswift.com/books/ios-swiftui/training-a-model-with-create-ml" },
    ],
  },
  {
    day: 27,
    title: "Project 4: BetterRest — building the app",
    isMilestone: false,
    items: [
      { key: "day-27-content", type: "content", label: "Read: Day 27", url: "https://www.hackingwithswift.com/100/swiftui/27" },
      { key: "day-27-video-1", type: "video", label: "Building a basic layout", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-a-basic-layout" },
      { key: "day-27-video-2", type: "video", label: "Connecting SwiftUI to Core ML", url: "https://www.hackingwithswift.com/books/ios-swiftui/connecting-swiftui-to-core-ml" },
      { key: "day-27-video-3", type: "video", label: "Cleaning up the user interface", url: "https://www.hackingwithswift.com/books/ios-swiftui/cleaning-up-the-user-interface" },
    ],
  },
  {
    day: 28,
    title: "Project 4: BetterRest — wrap up",
    isMilestone: false,
    items: [
      { key: "day-28-content", type: "content", label: "Read: Day 28", url: "https://www.hackingwithswift.com/100/swiftui/28" },
      { key: "day-28-challenge", type: "challenge", label: "BetterRest: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/28" },
    ],
  },

  // ── Days 29–31: Project 5 – Word Scramble ─────────────────────────────────
  {
    day: 29,
    title: "Project 5: Word Scramble — introduction",
    isMilestone: false,
    items: [
      { key: "day-29-content", type: "content", label: "Read: Day 29", url: "https://www.hackingwithswift.com/100/swiftui/29" },
      { key: "day-29-video-1", type: "video", label: "Word Scramble: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/word-scramble-introduction" },
      { key: "day-29-video-2", type: "video", label: "Introducing List, your best friend", url: "https://www.hackingwithswift.com/books/ios-swiftui/introducing-list-your-best-friend" },
      { key: "day-29-video-3", type: "video", label: "Loading resources from your app bundle", url: "https://www.hackingwithswift.com/books/ios-swiftui/loading-resources-from-your-app-bundle" },
      { key: "day-29-video-4", type: "video", label: "Working with strings", url: "https://www.hackingwithswift.com/books/ios-swiftui/working-with-strings" },
    ],
  },
  {
    day: 30,
    title: "Project 5: Word Scramble — building the app",
    isMilestone: false,
    items: [
      { key: "day-30-content", type: "content", label: "Read: Day 30", url: "https://www.hackingwithswift.com/100/swiftui/30" },
      { key: "day-30-video-1", type: "video", label: "Adding to a list of words", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-to-a-list-of-words" },
      { key: "day-30-video-2", type: "video", label: "Running code when our app launches", url: "https://www.hackingwithswift.com/books/ios-swiftui/running-code-when-our-app-launches" },
      { key: "day-30-video-3", type: "video", label: "Validating words with UITextChecker", url: "https://www.hackingwithswift.com/books/ios-swiftui/validating-words-with-uitextchecker" },
    ],
  },
  {
    day: 31,
    title: "Project 5: Word Scramble — wrap up",
    isMilestone: false,
    items: [
      { key: "day-31-content", type: "content", label: "Read: Day 31", url: "https://www.hackingwithswift.com/100/swiftui/31" },
      { key: "day-31-challenge", type: "challenge", label: "Word Scramble: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/31" },
    ],
  },

  // ── Days 32–34: Project 6 – Animation ────────────────────────────────────
  {
    day: 32,
    title: "Project 6: Animation — introduction",
    isMilestone: false,
    items: [
      { key: "day-32-content", type: "content", label: "Read: Day 32", url: "https://www.hackingwithswift.com/100/swiftui/32" },
      { key: "day-32-video-1", type: "video", label: "Animation: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/animation-introduction" },
      { key: "day-32-video-2", type: "video", label: "Creating implicit animations", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-implicit-animations" },
      { key: "day-32-video-3", type: "video", label: "Customizing animations in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/customizing-animations-in-swiftui" },
      { key: "day-32-video-4", type: "video", label: "Animating bindings", url: "https://www.hackingwithswift.com/books/ios-swiftui/animating-bindings" },
      { key: "day-32-video-5", type: "video", label: "Creating explicit animations", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-explicit-animations" },
    ],
  },
  {
    day: 33,
    title: "Project 6: Animation — building the app",
    isMilestone: false,
    items: [
      { key: "day-33-content", type: "content", label: "Read: Day 33", url: "https://www.hackingwithswift.com/100/swiftui/33" },
      { key: "day-33-video-1", type: "video", label: "Controlling the animation stack", url: "https://www.hackingwithswift.com/books/ios-swiftui/controlling-the-animation-stack" },
      { key: "day-33-video-2", type: "video", label: "Animating gestures", url: "https://www.hackingwithswift.com/books/ios-swiftui/animating-gestures" },
      { key: "day-33-video-3", type: "video", label: "Showing and hiding views with transitions", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-and-hiding-views-with-transitions" },
      { key: "day-33-video-4", type: "video", label: "Building custom transitions using ViewModifier", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-custom-transitions-using-viewmodifier" },
    ],
  },
  {
    day: 34,
    title: "Project 6: Animation — wrap up",
    isMilestone: false,
    items: [
      { key: "day-34-content", type: "content", label: "Read: Day 34", url: "https://www.hackingwithswift.com/100/swiftui/34" },
      { key: "day-34-challenge", type: "challenge", label: "Animation: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/34" },
    ],
  },

  // ── Day 35: Milestone ─────────────────────────────────────────────────────
  {
    day: 35,
    title: "Milestone: Projects 4–6",
    isMilestone: true,
    items: [
      { key: "day-35-content", type: "content", label: "Read: Day 35", url: "https://www.hackingwithswift.com/100/swiftui/35" },
      { key: "day-35-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/3/1/what-you-learned" },
      { key: "day-35-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/3/2/key-points" },
      { key: "day-35-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/35" },
    ],
  },

  // ── Days 36–38: Project 7 – iExpense ──────────────────────────────────────
  {
    day: 36,
    title: "Project 7: iExpense — introduction",
    isMilestone: false,
    items: [
      { key: "day-36-content", type: "content", label: "Read: Day 36", url: "https://www.hackingwithswift.com/100/swiftui/36" },
      { key: "day-36-video-1", type: "video", label: "iExpense: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/iexpense-introduction" },
      { key: "day-36-video-2", type: "video", label: "Using @State with classes", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-state-with-classes" },
      { key: "day-36-video-3", type: "video", label: "Sharing SwiftUI state with @Observable", url: "https://www.hackingwithswift.com/books/ios-swiftui/sharing-swiftui-state-with-observable" },
      { key: "day-36-video-4", type: "video", label: "Showing and hiding views", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-and-hiding-views" },
      { key: "day-36-video-5", type: "video", label: "Deleting items using onDelete()", url: "https://www.hackingwithswift.com/books/ios-swiftui/deleting-items-using-ondelete" },
      { key: "day-36-video-6", type: "video", label: "Storing user settings with UserDefaults", url: "https://www.hackingwithswift.com/books/ios-swiftui/storing-user-settings-with-userdefaults" },
      { key: "day-36-video-7", type: "video", label: "Archiving Swift objects with Codable", url: "https://www.hackingwithswift.com/books/ios-swiftui/archiving-swift-objects-with-codable" },
    ],
  },
  {
    day: 37,
    title: "Project 7: iExpense — building the app",
    isMilestone: false,
    items: [
      { key: "day-37-content", type: "content", label: "Read: Day 37", url: "https://www.hackingwithswift.com/100/swiftui/37" },
      { key: "day-37-video-1", type: "video", label: "Building a list we can delete from", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-a-list-we-can-delete-from" },
      { key: "day-37-video-2", type: "video", label: "Working with Identifiable items in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/working-with-identifiable-items-in-swiftui" },
      { key: "day-37-video-3", type: "video", label: "Sharing an observed object with a new view", url: "https://www.hackingwithswift.com/books/ios-swiftui/sharing-an-observed-object-with-a-new-view" },
      { key: "day-37-video-4", type: "video", label: "Making changes permanent with UserDefaults", url: "https://www.hackingwithswift.com/books/ios-swiftui/making-changes-permanent-with-userdefaults" },
      { key: "day-37-video-5", type: "video", label: "Final polish", url: "https://www.hackingwithswift.com/books/ios-swiftui/final-polish" },
    ],
  },
  {
    day: 38,
    title: "Project 7: iExpense — wrap up",
    isMilestone: false,
    items: [
      { key: "day-38-content", type: "content", label: "Read: Day 38", url: "https://www.hackingwithswift.com/100/swiftui/38" },
      { key: "day-38-challenge", type: "challenge", label: "iExpense: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/38" },
    ],
  },

  // ── Days 39–42: Project 8 – Moonshot ──────────────────────────────────────
  {
    day: 39,
    title: "Project 8: Moonshot — introduction",
    isMilestone: false,
    items: [
      { key: "day-39-content", type: "content", label: "Read: Day 39", url: "https://www.hackingwithswift.com/100/swiftui/39" },
      { key: "day-39-video-1", type: "video", label: "Moonshot: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/moonshot-introduction" },
      { key: "day-39-video-2", type: "video", label: "Resizing images to fit the available space", url: "https://www.hackingwithswift.com/books/ios-swiftui/resizing-images-to-fit-the-available-space" },
      { key: "day-39-video-3", type: "video", label: "How ScrollView lets us work with scrolling data", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-scrollview-lets-us-work-with-scrolling-data" },
      { key: "day-39-video-4", type: "video", label: "Pushing new views onto the stack using NavigationLink", url: "https://www.hackingwithswift.com/books/ios-swiftui/pushing-new-views-onto-the-stack-using-navigationlink" },
      { key: "day-39-video-5", type: "video", label: "Working with hierarchical Codable data", url: "https://www.hackingwithswift.com/books/ios-swiftui/working-with-hierarchical-codable-data" },
      { key: "day-39-video-6", type: "video", label: "How to lay out views in a scrolling grid", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-lay-out-views-in-a-scrolling-grid" },
    ],
  },
  {
    day: 40,
    title: "Project 8: Moonshot — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-40-content", type: "content", label: "Read: Day 40", url: "https://www.hackingwithswift.com/100/swiftui/40" },
      { key: "day-40-video-1", type: "video", label: "Loading a specific kind of Codable data", url: "https://www.hackingwithswift.com/books/ios-swiftui/loading-a-specific-kind-of-codable-data" },
      { key: "day-40-video-2", type: "video", label: "Using generics to load any kind of Codable data", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-generics-to-load-any-kind-of-codable-data" },
      { key: "day-40-video-3", type: "video", label: "Formatting our mission view", url: "https://www.hackingwithswift.com/books/ios-swiftui/formatting-our-mission-view" },
    ],
  },
  {
    day: 41,
    title: "Project 8: Moonshot — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-41-content", type: "content", label: "Read: Day 41", url: "https://www.hackingwithswift.com/100/swiftui/41" },
      { key: "day-41-video-1", type: "video", label: "Showing mission details with ScrollView and containerRelativeFrame()", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-mission-details-with-scrollview-and-containerrelativeframe" },
      { key: "day-41-video-2", type: "video", label: "Merging Codable structs", url: "https://www.hackingwithswift.com/books/ios-swiftui/merging-codable-structs" },
      { key: "day-41-video-3", type: "video", label: "Finishing up with one last view", url: "https://www.hackingwithswift.com/books/ios-swiftui/finishing-up-with-one-last-view" },
    ],
  },
  {
    day: 42,
    title: "Project 8: Moonshot — wrap up",
    isMilestone: false,
    items: [
      { key: "day-42-content", type: "content", label: "Read: Day 42", url: "https://www.hackingwithswift.com/100/swiftui/42" },
      { key: "day-42-challenge", type: "challenge", label: "Moonshot: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/42" },
    ],
  },

  // ── Days 43–46: Project 9 – Navigation ────────────────────────────────────
  {
    day: 43,
    title: "Project 9: Navigation — introduction",
    isMilestone: false,
    items: [
      { key: "day-43-content", type: "content", label: "Read: Day 43", url: "https://www.hackingwithswift.com/100/swiftui/43" },
      { key: "day-43-video-1", type: "video", label: "Navigation: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/navigation-introduction" },
      { key: "day-43-video-2", type: "video", label: "The problem with a simple NavigationLink", url: "https://www.hackingwithswift.com/books/ios-swiftui/the-problem-with-a-simple-navigationlink" },
      { key: "day-43-video-3", type: "video", label: "Handling navigation the smart way with navigationDestination()", url: "https://www.hackingwithswift.com/books/ios-swiftui/handling-navigation-the-smart-way-with-navigationdestination" },
    ],
  },
  {
    day: 44,
    title: "Project 9: Navigation — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-44-content", type: "content", label: "Read: Day 44", url: "https://www.hackingwithswift.com/100/swiftui/44" },
      { key: "day-44-video-1", type: "video", label: "Programmatic navigation with NavigationStack", url: "https://www.hackingwithswift.com/books/ios-swiftui/programmatic-navigation-with-navigationstack" },
      { key: "day-44-video-2", type: "video", label: "Navigating to different data types using NavigationPath", url: "https://www.hackingwithswift.com/books/ios-swiftui/navigating-to-different-data-types-using-navigationpath" },
      { key: "day-44-video-3", type: "video", label: "How to make a NavigationStack return to its root view programmatically", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-make-a-navigationstack-return-to-its-root-view-programmatically" },
      { key: "day-44-video-4", type: "video", label: "How to save NavigationStack paths using Codable", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-save-navigationstack-paths-using-codable" },
    ],
  },
  {
    day: 45,
    title: "Project 9: Navigation — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-45-content", type: "content", label: "Read: Day 45", url: "https://www.hackingwithswift.com/100/swiftui/45" },
      { key: "day-45-video-1", type: "video", label: "Customizing the navigation bar appearance", url: "https://www.hackingwithswift.com/books/ios-swiftui/customizing-the-navigation-bar-appearance" },
      { key: "day-45-video-2", type: "video", label: "Placing toolbar buttons in exact locations", url: "https://www.hackingwithswift.com/books/ios-swiftui/placing-toolbar-buttons-in-exact-locations" },
      { key: "day-45-video-3", type: "video", label: "Making your navigation title editable", url: "https://www.hackingwithswift.com/books/ios-swiftui/making-your-navigation-title-editable" },
    ],
  },
  {
    day: 46,
    title: "Project 9: Navigation — wrap up",
    isMilestone: false,
    items: [
      { key: "day-46-content", type: "content", label: "Read: Day 46", url: "https://www.hackingwithswift.com/100/swiftui/46" },
      { key: "day-46-challenge", type: "challenge", label: "Navigation: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/46" },
    ],
  },

  // ── Day 47: Milestone ─────────────────────────────────────────────────────
  {
    day: 47,
    title: "Milestone: Projects 7–9",
    isMilestone: true,
    items: [
      { key: "day-47-content", type: "content", label: "Read: Day 47", url: "https://www.hackingwithswift.com/100/swiftui/47" },
      { key: "day-47-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/4/1/what-you-learned" },
      { key: "day-47-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/4/2/key-points" },
      { key: "day-47-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/47" },
    ],
  },

  // ── Day 48: Pace yourself ──────────────────────────────────────────────────
  {
    day: 48,
    title: "Pace yourself",
    isMilestone: false,
    items: [
      { key: "day-48-content", type: "content", label: "Read: Day 48", url: "https://www.hackingwithswift.com/100/swiftui/48" },
      { key: "day-48-video-1", type: "video", label: "Watch: Paul Hudson at a conference", url: "https://www.hackingwithswift.com/100/swiftui/48" },
    ],
  },

  // ── Days 49–52: Project 10 – Cupcake Corner ───────────────────────────────
  {
    day: 49,
    title: "Project 10: Cupcake Corner — introduction",
    isMilestone: false,
    items: [
      { key: "day-49-content", type: "content", label: "Read: Day 49", url: "https://www.hackingwithswift.com/100/swiftui/49" },
      { key: "day-49-video-1", type: "video", label: "Cupcake Corner: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/cupcake-corner-introduction" },
      { key: "day-49-video-2", type: "video", label: "Sending and receiving Codable data with URLSession and SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/sending-and-receiving-codable-data-with-urlsession-and-swiftui" },
      { key: "day-49-video-3", type: "video", label: "Loading an image from a remote server", url: "https://www.hackingwithswift.com/books/ios-swiftui/loading-an-image-from-a-remote-server" },
      { key: "day-49-video-4", type: "video", label: "Validating and disabling forms", url: "https://www.hackingwithswift.com/books/ios-swiftui/validating-and-disabling-forms" },
    ],
  },
  {
    day: 50,
    title: "Project 10: Cupcake Corner — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-50-content", type: "content", label: "Read: Day 50", url: "https://www.hackingwithswift.com/100/swiftui/50" },
      { key: "day-50-video-1", type: "video", label: "Adding Codable conformance to an @Observable class", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-codable-conformance-to-an-observable-class" },
      { key: "day-50-video-2", type: "video", label: "Adding haptic effects", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-haptic-effects" },
      { key: "day-50-video-3", type: "video", label: "Taking basic order details", url: "https://www.hackingwithswift.com/books/ios-swiftui/taking-basic-order-details" },
    ],
  },
  {
    day: 51,
    title: "Project 10: Cupcake Corner — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-51-content", type: "content", label: "Read: Day 51", url: "https://www.hackingwithswift.com/100/swiftui/51" },
      { key: "day-51-video-1", type: "video", label: "Checking for a valid address", url: "https://www.hackingwithswift.com/books/ios-swiftui/checking-for-a-valid-address" },
      { key: "day-51-video-2", type: "video", label: "Preparing for checkout", url: "https://www.hackingwithswift.com/books/ios-swiftui/preparing-for-checkout" },
      { key: "day-51-video-3", type: "video", label: "Sending and receiving orders over the internet", url: "https://www.hackingwithswift.com/books/ios-swiftui/sending-and-receiving-orders-over-the-internet" },
    ],
  },
  {
    day: 52,
    title: "Project 10: Cupcake Corner — wrap up",
    isMilestone: false,
    items: [
      { key: "day-52-content", type: "content", label: "Read: Day 52", url: "https://www.hackingwithswift.com/100/swiftui/52" },
      { key: "day-52-challenge", type: "challenge", label: "Cupcake Corner: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/52" },
    ],
  },

  // ── Days 53–56: Project 11 – Bookworm ─────────────────────────────────────
  {
    day: 53,
    title: "Project 11: Bookworm — introduction",
    isMilestone: false,
    items: [
      { key: "day-53-content", type: "content", label: "Read: Day 53", url: "https://www.hackingwithswift.com/100/swiftui/53" },
      { key: "day-53-video-1", type: "video", label: "Bookworm: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/bookworm-introduction" },
      { key: "day-53-video-2", type: "video", label: "Creating a custom component with @Binding", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-a-custom-component-with-binding" },
      { key: "day-53-video-3", type: "video", label: "Accepting multi-line text input with TextEditor", url: "https://www.hackingwithswift.com/books/ios-swiftui/accepting-multi-line-text-input-with-texteditor" },
      { key: "day-53-video-4", type: "video", label: "Introduction to SwiftData and SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/introduction-to-swiftdata-and-swiftui" },
    ],
  },
  {
    day: 54,
    title: "Project 11: Bookworm — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-54-content", type: "content", label: "Read: Day 54", url: "https://www.hackingwithswift.com/100/swiftui/54" },
      { key: "day-54-video-1", type: "video", label: "Creating books with SwiftData", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-books-with-swiftdata" },
      { key: "day-54-video-2", type: "video", label: "Adding a custom star rating component", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-a-custom-star-rating-component" },
      { key: "day-54-video-3", type: "video", label: "Building a list with @Query", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-a-list-with-query" },
    ],
  },
  {
    day: 55,
    title: "Project 11: Bookworm — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-55-content", type: "content", label: "Read: Day 55", url: "https://www.hackingwithswift.com/100/swiftui/55" },
      { key: "day-55-video-1", type: "video", label: "Showing book details", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-book-details" },
      { key: "day-55-video-2", type: "video", label: "Sorting SwiftData queries using SortDescriptor", url: "https://www.hackingwithswift.com/books/ios-swiftui/sorting-swiftdata-queries-using-sortdescriptor" },
      { key: "day-55-video-3", type: "video", label: "Deleting from a SwiftData query", url: "https://www.hackingwithswift.com/books/ios-swiftui/deleting-from-a-swiftdata-query" },
      { key: "day-55-video-4", type: "video", label: "Using an alert to pop a NavigationLink programmatically", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-an-alert-to-pop-a-navigationlink-programmatically" },
    ],
  },
  {
    day: 56,
    title: "Project 11: Bookworm — wrap up",
    isMilestone: false,
    items: [
      { key: "day-56-content", type: "content", label: "Read: Day 56", url: "https://www.hackingwithswift.com/100/swiftui/56" },
      { key: "day-56-challenge", type: "challenge", label: "Bookworm: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/56" },
    ],
  },

  // ── Days 57–59: Project 12 – SwiftData ────────────────────────────────────
  {
    day: 57,
    title: "Project 12: SwiftData — introduction",
    isMilestone: false,
    items: [
      { key: "day-57-content", type: "content", label: "Read: Day 57", url: "https://www.hackingwithswift.com/100/swiftui/57" },
      { key: "day-57-video-1", type: "video", label: "SwiftData: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/swiftdata-introduction" },
      { key: "day-57-video-2", type: "video", label: "Editing SwiftData model objects", url: "https://www.hackingwithswift.com/books/ios-swiftui/editing-swiftdata-model-objects" },
      { key: "day-57-video-3", type: "video", label: "Filtering @Query using Predicate", url: "https://www.hackingwithswift.com/books/ios-swiftui/filtering-query-using-predicate" },
    ],
  },
  {
    day: 58,
    title: "Project 12: SwiftData — building the app",
    isMilestone: false,
    items: [
      { key: "day-58-content", type: "content", label: "Read: Day 58", url: "https://www.hackingwithswift.com/100/swiftui/58" },
      { key: "day-58-video-1", type: "video", label: "Dynamically sorting and filtering @Query with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/dynamically-sorting-and-filtering-query-with-swiftui" },
      { key: "day-58-video-2", type: "video", label: "Relationships with SwiftData, SwiftUI, and @Query", url: "https://www.hackingwithswift.com/books/ios-swiftui/relationships-with-swiftdata-swiftui-and-query" },
      { key: "day-58-video-3", type: "video", label: "Syncing SwiftData with CloudKit", url: "https://www.hackingwithswift.com/books/ios-swiftui/syncing-swiftdata-with-cloudkit" },
    ],
  },
  {
    day: 59,
    title: "Project 12: SwiftData — wrap up",
    isMilestone: false,
    items: [
      { key: "day-59-content", type: "content", label: "Read: Day 59", url: "https://www.hackingwithswift.com/100/swiftui/59" },
      { key: "day-59-challenge", type: "challenge", label: "SwiftData: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/59" },
    ],
  },

  // ── Day 60: Milestone ─────────────────────────────────────────────────────
  {
    day: 60,
    title: "Milestone: Projects 10–12",
    isMilestone: true,
    items: [
      { key: "day-60-content", type: "content", label: "Read: Day 60", url: "https://www.hackingwithswift.com/100/swiftui/60" },
      { key: "day-60-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/5/1/what-you-learned" },
      { key: "day-60-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/5/2/key-points" },
      { key: "day-60-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/60" },
    ],
  },

  // ── Day 61: Challenge day ──────────────────────────────────────────────────
  {
    day: 61,
    title: "Challenge day: Time for SwiftData",
    isMilestone: false,
    items: [
      { key: "day-61-content", type: "content", label: "Read: Day 61", url: "https://www.hackingwithswift.com/100/swiftui/61" },
      { key: "day-61-challenge", type: "challenge", label: "Build a SwiftData app from scratch", url: "https://www.hackingwithswift.com/100/swiftui/61" },
    ],
  },

  // ── Days 62–67: Project 13 – Instafilter ──────────────────────────────────
  {
    day: 62,
    title: "Project 13: Instafilter — introduction",
    isMilestone: false,
    items: [
      { key: "day-62-content", type: "content", label: "Read: Day 62", url: "https://www.hackingwithswift.com/100/swiftui/62" },
      { key: "day-62-video-1", type: "video", label: "Instafilter: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/instafilter-introduction" },
      { key: "day-62-video-2", type: "video", label: "How property wrappers become structs", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-property-wrappers-become-structs" },
      { key: "day-62-video-3", type: "video", label: "Responding to state changes using onChange()", url: "https://www.hackingwithswift.com/books/ios-swiftui/responding-to-state-changes-using-onchange" },
      { key: "day-62-video-4", type: "video", label: "Showing multiple options with confirmationDialog()", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-multiple-options-with-confirmationdialog" },
    ],
  },
  {
    day: 63,
    title: "Project 13: Instafilter — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-63-content", type: "content", label: "Read: Day 63", url: "https://www.hackingwithswift.com/100/swiftui/63" },
      { key: "day-63-video-1", type: "video", label: "Integrating Core Image with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/integrating-core-image-with-swiftui" },
      { key: "day-63-video-2", type: "video", label: "Showing empty states with ContentUnavailableView", url: "https://www.hackingwithswift.com/books/ios-swiftui/showing-empty-states-with-contentunavailableview" },
    ],
  },
  {
    day: 64,
    title: "Project 13: Instafilter — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-64-content", type: "content", label: "Read: Day 64", url: "https://www.hackingwithswift.com/100/swiftui/64" },
      { key: "day-64-video-1", type: "video", label: "Loading photos from the user's photo library", url: "https://www.hackingwithswift.com/books/ios-swiftui/loading-photos-from-the-users-photo-library" },
      { key: "day-64-video-2", type: "video", label: "How to let the user share content with ShareLink", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-let-the-user-share-content-with-sharelink" },
      { key: "day-64-video-3", type: "video", label: "How to ask the user to leave an App Store review", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-ask-the-user-to-leave-an-app-store-review" },
    ],
  },
  {
    day: 65,
    title: "Project 13: Instafilter — building the app, part 3",
    isMilestone: false,
    items: [
      { key: "day-65-content", type: "content", label: "Read: Day 65", url: "https://www.hackingwithswift.com/100/swiftui/65" },
      { key: "day-65-video-1", type: "video", label: "Building our basic UI", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-our-basic-ui" },
      { key: "day-65-video-2", type: "video", label: "Importing an image into SwiftUI using PhotosPicker", url: "https://www.hackingwithswift.com/books/ios-swiftui/importing-an-image-into-swiftui-using-photospicker" },
      { key: "day-65-video-3", type: "video", label: "Basic image filtering using Core Image", url: "https://www.hackingwithswift.com/books/ios-swiftui/basic-image-filtering-using-core-image" },
    ],
  },
  {
    day: 66,
    title: "Project 13: Instafilter — building the app, part 4",
    isMilestone: false,
    items: [
      { key: "day-66-content", type: "content", label: "Read: Day 66", url: "https://www.hackingwithswift.com/100/swiftui/66" },
      { key: "day-66-video-1", type: "video", label: "Customizing our filter using confirmationDialog()", url: "https://www.hackingwithswift.com/books/ios-swiftui/customizing-our-filter-using-confirmationdialog" },
      { key: "day-66-video-2", type: "video", label: "Sharing an image using ShareLink", url: "https://www.hackingwithswift.com/books/ios-swiftui/sharing-an-image-using-sharelink" },
    ],
  },
  {
    day: 67,
    title: "Project 13: Instafilter — wrap up",
    isMilestone: false,
    items: [
      { key: "day-67-content", type: "content", label: "Read: Day 67", url: "https://www.hackingwithswift.com/100/swiftui/67" },
      { key: "day-67-challenge", type: "challenge", label: "Instafilter: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/67" },
    ],
  },

  // ── Days 68–73: Project 14 – Bucket List ──────────────────────────────────
  {
    day: 68,
    title: "Project 14: Bucket List — introduction",
    isMilestone: false,
    items: [
      { key: "day-68-content", type: "content", label: "Read: Day 68", url: "https://www.hackingwithswift.com/100/swiftui/68" },
      { key: "day-68-video-1", type: "video", label: "Bucket List: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/bucket-list-introduction" },
      { key: "day-68-video-2", type: "video", label: "Adding conformance to Comparable for custom types", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-conformance-to-comparable-for-custom-types" },
      { key: "day-68-video-3", type: "video", label: "Writing data to the documents directory", url: "https://www.hackingwithswift.com/books/ios-swiftui/writing-data-to-the-documents-directory" },
      { key: "day-68-video-4", type: "video", label: "Switching view states with enums", url: "https://www.hackingwithswift.com/books/ios-swiftui/switching-view-states-with-enums" },
    ],
  },
  {
    day: 69,
    title: "Project 14: Bucket List — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-69-content", type: "content", label: "Read: Day 69", url: "https://www.hackingwithswift.com/100/swiftui/69" },
      { key: "day-69-video-1", type: "video", label: "Integrating MapKit with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/integrating-mapkit-with-swiftui" },
      { key: "day-69-video-2", type: "video", label: "Using Touch ID and Face ID with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-touch-id-and-face-id-with-swiftui" },
    ],
  },
  {
    day: 70,
    title: "Project 14: Bucket List — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-70-content", type: "content", label: "Read: Day 70", url: "https://www.hackingwithswift.com/100/swiftui/70" },
      { key: "day-70-video-1", type: "video", label: "Adding user locations to a map", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-user-locations-to-a-map" },
      { key: "day-70-video-2", type: "video", label: "Improving our map annotations", url: "https://www.hackingwithswift.com/books/ios-swiftui/improving-our-map-annotations" },
      { key: "day-70-video-3", type: "video", label: "Selecting and editing map annotations", url: "https://www.hackingwithswift.com/books/ios-swiftui/selecting-and-editing-map-annotations" },
    ],
  },
  {
    day: 71,
    title: "Project 14: Bucket List — building the app, part 3",
    isMilestone: false,
    items: [
      { key: "day-71-content", type: "content", label: "Read: Day 71", url: "https://www.hackingwithswift.com/100/swiftui/71" },
      { key: "day-71-video-1", type: "video", label: "Downloading data from Wikipedia", url: "https://www.hackingwithswift.com/books/ios-swiftui/downloading-data-from-wikipedia" },
      { key: "day-71-video-2", type: "video", label: "Sorting Wikipedia results", url: "https://www.hackingwithswift.com/books/ios-swiftui/sorting-wikipedia-results" },
    ],
  },
  {
    day: 72,
    title: "Project 14: Bucket List — building the app, part 4",
    isMilestone: false,
    items: [
      { key: "day-72-content", type: "content", label: "Read: Day 72", url: "https://www.hackingwithswift.com/100/swiftui/72" },
      { key: "day-72-video-1", type: "video", label: "Introducing MVVM into your SwiftUI project", url: "https://www.hackingwithswift.com/books/ios-swiftui/introducing-mvvm-into-your-swiftui-project" },
      { key: "day-72-video-2", type: "video", label: "Locking our UI behind Face ID", url: "https://www.hackingwithswift.com/books/ios-swiftui/locking-our-ui-behind-face-id" },
    ],
  },
  {
    day: 73,
    title: "Project 14: Bucket List — wrap up",
    isMilestone: false,
    items: [
      { key: "day-73-content", type: "content", label: "Read: Day 73", url: "https://www.hackingwithswift.com/100/swiftui/73" },
      { key: "day-73-challenge", type: "challenge", label: "Bucket List: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/73" },
    ],
  },

  // ── Days 74–76: Project 15 – Accessibility ────────────────────────────────
  {
    day: 74,
    title: "Project 15: Accessibility — introduction",
    isMilestone: false,
    items: [
      { key: "day-74-content", type: "content", label: "Read: Day 74", url: "https://www.hackingwithswift.com/100/swiftui/74" },
      { key: "day-74-video-1", type: "video", label: "Accessibility: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/accessibility-introduction" },
      { key: "day-74-video-2", type: "video", label: "Identifying views with useful labels", url: "https://www.hackingwithswift.com/books/ios-swiftui/identifying-views-with-useful-labels" },
      { key: "day-74-video-3", type: "video", label: "Hiding and grouping accessibility data", url: "https://www.hackingwithswift.com/books/ios-swiftui/hiding-and-grouping-accessibility-data" },
      { key: "day-74-video-4", type: "video", label: "Reading the value of controls", url: "https://www.hackingwithswift.com/books/ios-swiftui/reading-the-value-of-controls" },
    ],
  },
  {
    day: 75,
    title: "Project 15: Accessibility — fixing previous projects",
    isMilestone: false,
    items: [
      { key: "day-75-content", type: "content", label: "Read: Day 75", url: "https://www.hackingwithswift.com/100/swiftui/75" },
      { key: "day-75-video-1", type: "video", label: "Handling voice input in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/handling-voice-input-in-swiftui" },
      { key: "day-75-video-2", type: "video", label: "Fixing Guess the Flag", url: "https://www.hackingwithswift.com/books/ios-swiftui/fixing-guess-the-flag" },
      { key: "day-75-video-3", type: "video", label: "Fixing Word Scramble", url: "https://www.hackingwithswift.com/books/ios-swiftui/fixing-word-scramble" },
      { key: "day-75-video-4", type: "video", label: "Fixing Bookworm", url: "https://www.hackingwithswift.com/books/ios-swiftui/fixing-bookworm" },
    ],
  },
  {
    day: 76,
    title: "Project 15: Accessibility — wrap up",
    isMilestone: false,
    items: [
      { key: "day-76-content", type: "content", label: "Read: Day 76", url: "https://www.hackingwithswift.com/100/swiftui/76" },
      { key: "day-76-challenge", type: "challenge", label: "Accessibility: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/76" },
    ],
  },

  // ── Day 77: Milestone ─────────────────────────────────────────────────────
  {
    day: 77,
    title: "Milestone: Projects 13–15",
    isMilestone: true,
    items: [
      { key: "day-77-content", type: "content", label: "Read: Day 77", url: "https://www.hackingwithswift.com/100/swiftui/77" },
      { key: "day-77-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/6/1/what-you-learned" },
      { key: "day-77-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/6/2/key-points" },
      { key: "day-77-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/77" },
    ],
  },

  // ── Day 78: Challenge day ──────────────────────────────────────────────────
  {
    day: 78,
    title: "Challenge day: Time for MapKit",
    isMilestone: false,
    items: [
      { key: "day-78-content", type: "content", label: "Read: Day 78", url: "https://www.hackingwithswift.com/100/swiftui/78" },
      { key: "day-78-challenge", type: "challenge", label: "Build a MapKit app from scratch", url: "https://www.hackingwithswift.com/100/swiftui/78" },
    ],
  },

  // ── Days 79–85: Project 16 – Hot Prospects ────────────────────────────────
  {
    day: 79,
    title: "Project 16: Hot Prospects — introduction",
    isMilestone: false,
    items: [
      { key: "day-79-content", type: "content", label: "Read: Day 79", url: "https://www.hackingwithswift.com/100/swiftui/79" },
      { key: "day-79-video-1", type: "video", label: "Hot Prospects: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/hot-prospects-introduction" },
      { key: "day-79-video-2", type: "video", label: "Letting users select items in a List", url: "https://www.hackingwithswift.com/books/ios-swiftui/letting-users-select-items-in-a-list" },
      { key: "day-79-video-3", type: "video", label: "Creating tabs with TabView and tabItem()", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-tabs-with-tabview-and-tabitem" },
    ],
  },
  {
    day: 80,
    title: "Project 16: Hot Prospects — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-80-content", type: "content", label: "Read: Day 80", url: "https://www.hackingwithswift.com/100/swiftui/80" },
      { key: "day-80-video-1", type: "video", label: "Understanding Swift's Result type", url: "https://www.hackingwithswift.com/books/ios-swiftui/understanding-swifts-result-type" },
      { key: "day-80-video-2", type: "video", label: "Controlling image interpolation in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/controlling-image-interpolation-in-swiftui" },
      { key: "day-80-video-3", type: "video", label: "Creating context menus", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-context-menus" },
    ],
  },
  {
    day: 81,
    title: "Project 16: Hot Prospects — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-81-content", type: "content", label: "Read: Day 81", url: "https://www.hackingwithswift.com/100/swiftui/81" },
      { key: "day-81-video-1", type: "video", label: "Adding custom row swipe actions to a List", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-custom-row-swipe-actions-to-a-list" },
      { key: "day-81-video-2", type: "video", label: "Scheduling local notifications", url: "https://www.hackingwithswift.com/books/ios-swiftui/scheduling-local-notifications" },
      { key: "day-81-video-3", type: "video", label: "Adding Swift package dependencies in Xcode", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-swift-package-dependencies-in-xcode" },
    ],
  },
  {
    day: 82,
    title: "Project 16: Hot Prospects — building the app, part 3",
    isMilestone: false,
    items: [
      { key: "day-82-content", type: "content", label: "Read: Day 82", url: "https://www.hackingwithswift.com/100/swiftui/82" },
      { key: "day-82-video-1", type: "video", label: "Building our tab bar", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-our-tab-bar" },
      { key: "day-82-video-2", type: "video", label: "Storing our data with SwiftData", url: "https://www.hackingwithswift.com/books/ios-swiftui/storing-our-data-with-swiftdata" },
      { key: "day-82-video-3", type: "video", label: "Dynamically filtering our SwiftData query", url: "https://www.hackingwithswift.com/books/ios-swiftui/dynamically-filtering-our-swiftdata-query" },
    ],
  },
  {
    day: 83,
    title: "Project 16: Hot Prospects — building the app, part 4",
    isMilestone: false,
    items: [
      { key: "day-83-content", type: "content", label: "Read: Day 83", url: "https://www.hackingwithswift.com/100/swiftui/83" },
      { key: "day-83-video-1", type: "video", label: "Generating and scaling up a QR code", url: "https://www.hackingwithswift.com/books/ios-swiftui/generating-and-scaling-up-a-qr-code" },
      { key: "day-83-video-2", type: "video", label: "Scanning QR codes with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/scanning-qr-codes-with-swiftui" },
      { key: "day-83-video-3", type: "video", label: "Adding options with swipe actions", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-options-with-swipe-actions" },
    ],
  },
  {
    day: 84,
    title: "Project 16: Hot Prospects — building the app, part 5",
    isMilestone: false,
    items: [
      { key: "day-84-content", type: "content", label: "Read: Day 84", url: "https://www.hackingwithswift.com/100/swiftui/84" },
      { key: "day-84-video-1", type: "video", label: "Adding a context menu to an image", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-a-context-menu-to-an-image" },
      { key: "day-84-video-2", type: "video", label: "Posting notifications to the lock screen", url: "https://www.hackingwithswift.com/books/ios-swiftui/posting-notifications-to-the-lock-screen" },
    ],
  },
  {
    day: 85,
    title: "Project 16: Hot Prospects — wrap up",
    isMilestone: false,
    items: [
      { key: "day-85-content", type: "content", label: "Read: Day 85", url: "https://www.hackingwithswift.com/100/swiftui/85" },
      { key: "day-85-challenge", type: "challenge", label: "Hot Prospects: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/85" },
    ],
  },

  // ── Days 86–91: Project 17 – Flashzilla ───────────────────────────────────
  {
    day: 86,
    title: "Project 17: Flashzilla — introduction",
    isMilestone: false,
    items: [
      { key: "day-86-content", type: "content", label: "Read: Day 86", url: "https://www.hackingwithswift.com/100/swiftui/86" },
      { key: "day-86-video-1", type: "video", label: "Flashzilla: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/flashzilla-introduction" },
      { key: "day-86-video-2", type: "video", label: "How to use gestures in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-use-gestures-in-swiftui" },
      { key: "day-86-video-3", type: "video", label: "Disabling user interactivity with allowsHitTesting()", url: "https://www.hackingwithswift.com/books/ios-swiftui/disabling-user-interactivity-with-allowshittesting" },
    ],
  },
  {
    day: 87,
    title: "Project 17: Flashzilla — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-87-content", type: "content", label: "Read: Day 87", url: "https://www.hackingwithswift.com/100/swiftui/87" },
      { key: "day-87-video-1", type: "video", label: "Triggering events repeatedly using a timer", url: "https://www.hackingwithswift.com/books/ios-swiftui/triggering-events-repeatedly-using-a-timer" },
      { key: "day-87-video-2", type: "video", label: "How to be notified when your SwiftUI app moves to the background", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-be-notified-when-your-swiftui-app-moves-to-the-background" },
      { key: "day-87-video-3", type: "video", label: "Supporting specific accessibility needs with SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/supporting-specific-accessibility-needs-with-swiftui" },
    ],
  },
  {
    day: 88,
    title: "Project 17: Flashzilla — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-88-content", type: "content", label: "Read: Day 88", url: "https://www.hackingwithswift.com/100/swiftui/88" },
      { key: "day-88-video-1", type: "video", label: "Designing a single card view", url: "https://www.hackingwithswift.com/books/ios-swiftui/designing-a-single-card-view" },
      { key: "day-88-video-2", type: "video", label: "Building a stack of cards", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-a-stack-of-cards" },
      { key: "day-88-video-3", type: "video", label: "Moving views with DragGesture and offset()", url: "https://www.hackingwithswift.com/books/ios-swiftui/moving-views-with-draggesture-and-offset" },
    ],
  },
  {
    day: 89,
    title: "Project 17: Flashzilla — building the app, part 3",
    isMilestone: false,
    items: [
      { key: "day-89-content", type: "content", label: "Read: Day 89", url: "https://www.hackingwithswift.com/100/swiftui/89" },
      { key: "day-89-video-1", type: "video", label: "Coloring views as we swipe", url: "https://www.hackingwithswift.com/books/ios-swiftui/coloring-views-as-we-swipe" },
      { key: "day-89-video-2", type: "video", label: "Counting down with a Timer", url: "https://www.hackingwithswift.com/books/ios-swiftui/counting-down-with-a-timer" },
      { key: "day-89-video-3", type: "video", label: "Ending the app with allowsHitTesting()", url: "https://www.hackingwithswift.com/books/ios-swiftui/ending-the-app-with-allowshittesting" },
    ],
  },
  {
    day: 90,
    title: "Project 17: Flashzilla — building the app, part 4",
    isMilestone: false,
    items: [
      { key: "day-90-content", type: "content", label: "Read: Day 90", url: "https://www.hackingwithswift.com/100/swiftui/90" },
      { key: "day-90-video-1", type: "video", label: "Fixing the bugs", url: "https://www.hackingwithswift.com/books/ios-swiftui/fixing-the-bugs" },
      { key: "day-90-video-2", type: "video", label: "Adding and deleting cards", url: "https://www.hackingwithswift.com/books/ios-swiftui/adding-and-deleting-cards" },
    ],
  },
  {
    day: 91,
    title: "Project 17: Flashzilla — wrap up",
    isMilestone: false,
    items: [
      { key: "day-91-content", type: "content", label: "Read: Day 91", url: "https://www.hackingwithswift.com/100/swiftui/91" },
      { key: "day-91-challenge", type: "challenge", label: "Flashzilla: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/91" },
    ],
  },

  // ── Days 92–94: Project 18 – Layout and Geometry ─────────────────────────
  {
    day: 92,
    title: "Project 18: Layout and Geometry — introduction",
    isMilestone: false,
    items: [
      { key: "day-92-content", type: "content", label: "Read: Day 92", url: "https://www.hackingwithswift.com/100/swiftui/92" },
      { key: "day-92-video-1", type: "video", label: "Layout and geometry: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/layout-and-geometry-introduction" },
      { key: "day-92-video-2", type: "video", label: "How layout works in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-layout-works-in-swiftui" },
      { key: "day-92-video-3", type: "video", label: "Alignment and alignment guides", url: "https://www.hackingwithswift.com/books/ios-swiftui/alignment-and-alignment-guides" },
      { key: "day-92-video-4", type: "video", label: "How to create a custom alignment guide", url: "https://www.hackingwithswift.com/books/ios-swiftui/how-to-create-a-custom-alignment-guide" },
      { key: "day-92-video-5", type: "video", label: "Absolute positioning for SwiftUI views", url: "https://www.hackingwithswift.com/books/ios-swiftui/absolute-positioning-for-swiftui-views" },
    ],
  },
  {
    day: 93,
    title: "Project 18: Layout and Geometry — building the app",
    isMilestone: false,
    items: [
      { key: "day-93-content", type: "content", label: "Read: Day 93", url: "https://www.hackingwithswift.com/100/swiftui/93" },
      { key: "day-93-video-1", type: "video", label: "Resizing images to fit the screen using GeometryReader", url: "https://www.hackingwithswift.com/books/ios-swiftui/resizing-images-to-fit-the-screen-using-geometryreader" },
      { key: "day-93-video-2", type: "video", label: "Understanding frames and coordinates inside GeometryReader", url: "https://www.hackingwithswift.com/books/ios-swiftui/understanding-frames-and-coordinates-inside-geometryreader" },
      { key: "day-93-video-3", type: "video", label: "ScrollView effects using GeometryReader", url: "https://www.hackingwithswift.com/books/ios-swiftui/scrollview-effects-using-geometryreader" },
      { key: "day-93-video-4", type: "video", label: "ScrollView effects using visualEffect() and scrollTargetBehavior()", url: "https://www.hackingwithswift.com/books/ios-swiftui/scrollview-effects-using-visualeffect-and-scrollTargetBehavior" },
    ],
  },
  {
    day: 94,
    title: "Project 18: Layout and Geometry — wrap up",
    isMilestone: false,
    items: [
      { key: "day-94-content", type: "content", label: "Read: Day 94", url: "https://www.hackingwithswift.com/100/swiftui/94" },
      { key: "day-94-challenge", type: "challenge", label: "Layout and geometry: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/94" },
    ],
  },

  // ── Day 95: Milestone ─────────────────────────────────────────────────────
  {
    day: 95,
    title: "Milestone: Projects 16–18",
    isMilestone: true,
    items: [
      { key: "day-95-content", type: "content", label: "Read: Day 95", url: "https://www.hackingwithswift.com/100/swiftui/95" },
      { key: "day-95-video-1", type: "video", label: "What you learned", url: "https://www.hackingwithswift.com/guide/ios-swiftui/7/1/what-you-learned" },
      { key: "day-95-video-2", type: "video", label: "Key points", url: "https://www.hackingwithswift.com/guide/ios-swiftui/7/2/key-points" },
      { key: "day-95-challenge", type: "challenge", label: "Milestone challenge", url: "https://www.hackingwithswift.com/100/swiftui/95" },
    ],
  },

  // ── Days 96–99: Project 19 – SnowSeeker ───────────────────────────────────
  {
    day: 96,
    title: "Project 19: SnowSeeker — introduction",
    isMilestone: false,
    items: [
      { key: "day-96-content", type: "content", label: "Read: Day 96", url: "https://www.hackingwithswift.com/100/swiftui/96" },
      { key: "day-96-video-1", type: "video", label: "SnowSeeker: Introduction", url: "https://www.hackingwithswift.com/books/ios-swiftui/snowseeker-introduction" },
      { key: "day-96-video-2", type: "video", label: "Working with two side by side views in SwiftUI", url: "https://www.hackingwithswift.com/books/ios-swiftui/working-with-two-side-by-side-views-in-swiftui" },
      { key: "day-96-video-3", type: "video", label: "Using alert() and sheet() with optionals", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-alert-and-sheet-with-optionals" },
      { key: "day-96-video-4", type: "video", label: "Using groups as transparent layout containers", url: "https://www.hackingwithswift.com/books/ios-swiftui/using-groups-as-transparent-layout-containers" },
      { key: "day-96-video-5", type: "video", label: "Making a SwiftUI view searchable", url: "https://www.hackingwithswift.com/books/ios-swiftui/making-a-swiftui-view-searchable" },
      { key: "day-96-video-6", type: "video", label: "Sharing @Observable objects through SwiftUI's environment", url: "https://www.hackingwithswift.com/books/ios-swiftui/sharing-observable-objects-through-swiftuis-environment" },
    ],
  },
  {
    day: 97,
    title: "Project 19: SnowSeeker — building the app, part 1",
    isMilestone: false,
    items: [
      { key: "day-97-content", type: "content", label: "Read: Day 97", url: "https://www.hackingwithswift.com/100/swiftui/97" },
      { key: "day-97-video-1", type: "video", label: "Building a primary list of items", url: "https://www.hackingwithswift.com/books/ios-swiftui/building-a-primary-list-of-items" },
      { key: "day-97-video-2", type: "video", label: "Presenting a default detail view on iPad", url: "https://www.hackingwithswift.com/books/ios-swiftui/presenting-a-default-detail-view-on-ipad" },
      { key: "day-97-video-3", type: "video", label: "Creating a detail view for resorts", url: "https://www.hackingwithswift.com/books/ios-swiftui/creating-a-detail-view-for-resorts" },
    ],
  },
  {
    day: 98,
    title: "Project 19: SnowSeeker — building the app, part 2",
    isMilestone: false,
    items: [
      { key: "day-98-content", type: "content", label: "Read: Day 98", url: "https://www.hackingwithswift.com/100/swiftui/98" },
      { key: "day-98-video-1", type: "video", label: "Searching for data in a List", url: "https://www.hackingwithswift.com/books/ios-swiftui/searching-for-data-in-a-list" },
      { key: "day-98-video-2", type: "video", label: "Changing a view's layout in response to size classes", url: "https://www.hackingwithswift.com/books/ios-swiftui/changing-a-views-layout-in-response-to-size-classes" },
      { key: "day-98-video-3", type: "video", label: "Binding an alert to an optional string", url: "https://www.hackingwithswift.com/books/ios-swiftui/binding-an-alert-to-an-optional-string" },
      { key: "day-98-video-4", type: "video", label: "Letting the user mark favorites", url: "https://www.hackingwithswift.com/books/ios-swiftui/letting-the-user-mark-favorites" },
    ],
  },
  {
    day: 99,
    title: "Project 19: SnowSeeker — wrap up",
    isMilestone: false,
    items: [
      { key: "day-99-content", type: "content", label: "Read: Day 99", url: "https://www.hackingwithswift.com/100/swiftui/99" },
      { key: "day-99-challenge", type: "challenge", label: "SnowSeeker: Wrap up", url: "https://www.hackingwithswift.com/100/swiftui/99" },
    ],
  },

  // ── Day 100: Final Exam ────────────────────────────────────────────────────
  {
    day: 100,
    title: "Final exam",
    isMilestone: true,
    items: [
      { key: "day-100-content", type: "content", label: "Read: Day 100", url: "https://www.hackingwithswift.com/100/swiftui/100" },
      { key: "day-100-challenge", type: "challenge", label: "Final exam", url: "https://www.hackingwithswift.com/100/swiftui/100" },
    ],
  },
];

// Only count items with checkboxes (not "content" type, which are link-only)
export const TOTAL_ITEMS = COURSE_DATA.reduce(
  (sum, day) => sum + day.items.filter((i) => i.type !== "content").length,
  0
);
