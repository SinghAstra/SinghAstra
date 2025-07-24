function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Mongo DB",
    "Postgres",
    "Redis",
    "Bull MQ",
    "Express JS",
    "Tailwind CSS",
  ];

  return (
    <div className="w-full mt-8">
      <div className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded border px-4 py-2 text-sm font-medium shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
