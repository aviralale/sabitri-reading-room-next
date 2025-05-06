import type { Stat } from "@/types";

type StatsProps = {
  stats: Stat[];
  animateStats: boolean;
};

export default function Stats({ stats, animateStats }: StatsProps) {
  return (
    <div className="mt-10 flex justify-between border-y border-border/50 py-4 px-2">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className={`text-2xl font-bold bg-gradient-to-r from-primary to-red-500/80 bg-clip-text text-transparent ${
              animateStats ? "scale-100 opacity-100" : "scale-90 opacity-0"
            } transition-all duration-700 delay-${index * 200}`}
          >
            {stat.value}
          </div>
          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
