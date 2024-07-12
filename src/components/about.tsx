import { Badge } from "./ui/badge";

export default function About() {
  const list = [
    "Html",
    "Css",
    "Javascript",
    "Typescript",
    "Tailwindcss",
    "Bootstrap",
    "Shadcn",
    "Material UI",
    "React",
    "Next.js",
    "React Native",
    "Astro",
    "Redux",
    "Redux Toolkit",
    "Axios",
    "Three.js",
    "Markdown",
    "Markdown Extention",
    "Prisma",
    "Node.js",
    "MongoDB",
    "SQL",
    "Postgresql",
    "Sqlite",
    "Mongoose",
    "Express.js",
    "Strapi.js",
    "Yarn",
    "Npm",
    "Pnpm",
    "Git",
    "Github",
    "Python",
    "Django",
    "Django Rest",
    "Flask",
    "Scikit-learn",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "PHP",
    "Linux Commands",
    "Figma",
  ];
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">About myself</h2>
              <p className="mt-3 text-muted-foreground">
                I'm a Commerce student studying at Nalbari Commerce. I enjoy
                creating fullstack apps alongwith user interfaces and its
                backend in different and unique ways (mostly with Node.js,
                Typescript, Python, PHP).
              </p>
            </div>
            <div className="gap-5 flex flex-wrap">
              {list.map((data, i) => {
                return (
                  <Badge key={i} className="text-base">
                    {data}
                  </Badge>
                );
              })}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
