import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import programming from "@/assets/images/programming.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  amazonwebservicesIcon,
  bootstrapIcon,
  cssIcon,
  firebaseIcon,
  githubIcon,
  gitIcon,
  htmlIcon,
  jqueryIcon,
  jsIcon,
  mysqlIcon,
  nextdotjsIcon,
  reactIcon,
  tailwindcssIcon,
} from "@/assets/icons";
import { Button } from "../ui/button";
import { projetosCard } from "@/data/projetos";

export function Portifolio() {
  const technologyIcons: Record<string, { icon: any; label: string }> = {
    html: { icon: htmlIcon, label: "HTML5" },
    css: { icon: cssIcon, label: "CSS3" },
    js: { icon: jsIcon, label: "JavaScript" },
    bootstrap: { icon: bootstrapIcon, label: "Bootstrap" },
    jquery: { icon: jqueryIcon, label: "jQuery" },
    react: { icon: reactIcon, label: "React.js" },
    tailwind: { icon: tailwindcssIcon, label: "Tailwind CSS" },
    next: { icon: nextdotjsIcon, label: "Next.js" },
    firebase: { icon: firebaseIcon, label: "Firebase" },
    git: { icon: gitIcon, label: "Git" },
    github: { icon: githubIcon, label: "GitHub" },
    mysql: { icon: mysqlIcon, label: "MySQL" },
    aws: { icon: amazonwebservicesIcon, label: "AWS" },
    typescript: { icon: jsIcon, label: "TypeScript" },
  };

  return (
    <>
      <section className="bg-slate-200 text-center text-slate-400 py-16 md:py-28 mt-24 md:mt-48" id='portifolio'>
        <h2 className="title underline-effect text-center text-sky-900">
          <strong>Projetos</strong>
        </h2>
        <div className="max-w-full flex justify-center content-center pt-10 md:pt-20">
          <Carousel>
            <CarouselContent aria-roledescription="carousel">
              {projetosCard.map((projeto, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="md:flex flex-col justify-around items-center text-sky-900 gap-6 p-4 bg-white rounded-lg shadow-md">
                    <Image
                      src={projeto.image}
                      alt={`Imagem do projeto ${projeto.title}`}
                      width={300}
                      height={350}
                      className="imgcode"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{projeto.title}</h3>
                      <p className="text-sm">{projeto.description}</p>
                      <div className="flex gap-4 justify-center my-4">
                        <Button asChild>
                          <a
                            href={projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </a>
                        </Button>
                        <Button asChild>
                          <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sistema
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="gap-4 justify-center">
                      <h3>Tecnologias Utilizadas</h3>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {projeto.technologies.map((tech) => {
                          const technology = technologyIcons[tech];
                          if (!technology) return null;

                          return (
                            <TooltipProvider key={tech}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Image
                                    src={technology.icon}
                                    alt={technology.label}
                                    width={45}
                                    height={45}
                                    className="img-icon"
                                  />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{technology.label}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
