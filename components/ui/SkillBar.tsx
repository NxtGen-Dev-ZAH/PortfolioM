interface SkillBarProps {
  skill: string;
  percentage: number;
  color: "cyan" | "purple" | "gradient";
}

const SkillBar = ({ skill, percentage, color }: SkillBarProps) => {
  const getGradientClass = () => {
    switch (color) {
      case "cyan":
        return "bg-gradient-to-r from-cyan-500 to-cyan-400";
      case "purple":
        return "bg-gradient-to-r from-purple-500 to-purple-400";
      case "gradient":
        return "bg-gradient-to-r from-cyan-500 to-purple-500";
      default:
        return "bg-gradient-to-r from-cyan-500 to-cyan-400";
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill}</span>
        <span className="text-zinc-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div
          className={`h-full rounded-full ${getGradientClass()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar; 