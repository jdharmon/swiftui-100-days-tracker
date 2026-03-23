interface Props {
  completed: number;
  total: number;
  percentage: number;
}

export default function ProgressBar({ completed, total, percentage }: Props) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-2xl font-bold text-fg">{percentage}%</span>
        <span className="text-sm text-fg-mid">
          {completed} / {total} items completed
        </span>
      </div>
      <div className="h-3 bg-track rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
