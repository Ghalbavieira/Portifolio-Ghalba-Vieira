import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import programming from "@/assets/images/programming.jpg";
import { Button } from "../ui/button";
import { recomendacoes } from "@/data/recomendacoes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function SectionService() {
  return (
    <section className="text-center">
      <h2 className="title underline-effect mt-10 mb-0 text-white text-center">
        <strong>Recomendações</strong>
      </h2>
      <div className="max-w-full flex justify-center pt-10 md:pt-20">
        <div className="relative w-full max-w-5xl">
          <Carousel>
            <CarouselContent aria-roledescription="carousel">
              {recomendacoes.map((recomendacao, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Card className="m-4 max-w-[500px] w-full flex flex-col justify-between h-auto">
                    <CardHeader>
                      <p>{recomendacao.depoimento}</p>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <CardTitle>{recomendacao.nome}</CardTitle>
                      <CardDescription>{recomendacao.cargo}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
      <p className="text-white text-md mt-5">
        * Todas as recomendações estão disponíveis no{" "}
        <a
          href="https://www.linkedin.com/in/ghalba-vieira/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn ˎˊ˗
        </a>
      </p>
    </section>
  );
}
