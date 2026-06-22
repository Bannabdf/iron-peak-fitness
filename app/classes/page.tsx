const classesList = [
  {
    emoji: "🔥",
    name: "HIIT",
    duration: "45 min",
    difficulty: "Advanced",
    description:
      "High-intensity interval training to maximize calorie burn and build endurance.",
  },
  {
    emoji: "🧘",
    name: "Yoga",
    duration: "60 min",
    difficulty: "Beginner",
    description:
      "Improve flexibility, balance, and mindfulness in a calming environment.",
  },
  {
    emoji: "🚴",
    name: "Spin Cycle",
    duration: "45 min",
    difficulty: "Intermediate",
    description:
      "High-energy indoor cycling with motivating music and coached sprints.",
  },
  {
    emoji: "🥊",
    name: "Boxing",
    duration: "50 min",
    difficulty: "Intermediate",
    description:
      "Learn boxing techniques while getting a full-body cardio workout.",
  },
  {
    emoji: "🏋️",
    name: "Strength Training",
    duration: "60 min",
    difficulty: "Intermediate",
    description:
      "Build lean muscle and increase strength with guided resistance training.",
  },
  {
    emoji: "🤸",
    name: "Pilates",
    duration: "50 min",
    difficulty: "Beginner",
    description:
      "Core-focused exercises to improve posture, stability, and overall strength.",
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced: "text-red-400 bg-red-400/10",
};

export default function ClassesPage() {
  return (
    <>
      {/* Header */}
      <section className="w-full pt-24 pb-12 bg-background border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Our Classes
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            From high-intensity training to mindful movement, we offer a class
            for every fitness level.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classesList.map((cls) => (
              <div
                key={cls.name}
                className="bg-background border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <div className="text-5xl mb-4">{cls.emoji}</div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2 tracking-wider">
                  {cls.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs text-white/60 uppercase tracking-wider">
                    {cls.duration}
                  </span>
                  <span
                    className={`font-body text-xs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider ${difficultyColors[cls.difficulty]}`}
                  >
                    {cls.difficulty}
                  </span>
                </div>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {cls.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
