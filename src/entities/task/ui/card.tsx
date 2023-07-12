interface ITodoCardProps {
  handleClick: () => void;
  icon: React.ReactNode;
  text: string;
  isComplete: boolean;
  feature: React.ReactNode;
}

export function TodoCard({
  handleClick,
  icon,
  text,
  isComplete,
  feature,
}: ITodoCardProps) {
  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex-1" onClick={handleClick} aria-hidden="true">
        <span className={`flex-grow ${isComplete ? 'line-through' : ''}`}>
          {text}
        </span>
      </div>
      <span className="mx-2 cursor-pointer">{icon}</span>
      {feature}
    </div>
  );
}
