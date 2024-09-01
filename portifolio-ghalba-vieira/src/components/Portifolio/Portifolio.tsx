import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import Image from 'next/image';

export function Portifolio() {
    return(
        <section className="max-w-sm">
        <h2 className="title underline-effect text-center my-8"><strong>Projetos</strong></h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>
                <Image src='' alt={""}/>
                <div>
                  <h4>Nome do Projeto</h4>
                  <p></p>
                </div>
                <div>
                  <h4>Tecnologias utilizadas</h4>
                  <p></p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem><div>
                <Image src='' alt={""}/>
                <div>
                  <h4>Nome do Projeto</h4>
                  <p></p>
                </div>
                <div>
                  <h4>Tecnologias utilizadas</h4>
                  <p></p>
                </div>
              </div></CarouselItem>
            <CarouselItem><div>
                <Image src='' alt={""}/>
                <div>
                  <h4>Nome do Projeto</h4>
                  <p></p>
                </div>
                <div>
                  <h4>Tecnologias utilizadas</h4>
                  <p></p>
                </div>
              </div></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    );
}