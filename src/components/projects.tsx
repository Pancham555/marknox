import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Projects() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Projects
            </h2>
            <p className="mt-3 text-muted-foreground">
              Here I showcase the projects that I've built till now!
            </p>
            {/* <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href="#"
              >
                Contact sales to learn more
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p> */}
          </div>
          {/* End Col */}
          <div className="gap-5 grid grid-cols-2">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <a href="" target="_blank">
                  <Card key={i} className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                      className="h-48 w-full"
                    />
                    <CardHeader>
                      <CardTitle>Lorem, ipsum dolor.</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus libero magnam blanditiis eaque ratione tempore
                        quasi maxime veritatis modi?
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
