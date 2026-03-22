interface Props {
  completed: number;
  total: number;
  percentage: number;
}

export default function ProgressBar({ completed, total, percentage }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-2xl font-bold text-white">{percentage}%</span>
        <span className="text-sm text-zinc-400">
          {completed} / {total} items completed
        </span>
      </div>
      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
