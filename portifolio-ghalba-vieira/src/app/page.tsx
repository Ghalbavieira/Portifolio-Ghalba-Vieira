import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";
import Image from 'next/image';
import { AboutSection } from "@/components/About/About";
import {TypingEffect} from "@/components/TypingEffect/TypingEffect";
import { Faixa } from "@/components/Faixa/Faixa";
import { SectionService } from "@/components/SectionService/SectionService";
import { Portifolio } from "@/components/Portifolio/Portifolio";
import { Contato } from "@/components/contato/contato";
import buscaLivrosImg from "@/assets/images/busca-livros.png";

export default function Home() {
  const words = ["Desenvolvedora Front-End", "Apaixonada por tecnologias", "Soluções inovadoras"];



  return (
    <main className="flex-col justify-center">
      <section className="md:flex md:justify-around content-center items-center md:py-20 mx-auto">
        <div className="text-center md:text-left md:max-w-xl my-4">
          <h3 className="text-4xl font-bold text-white mb-4">
            Olá, meu nome é
          </h3>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">
            Ghalba Vieira
          </h2>
          <h3 className="md:text-3xl font-medium text-blue-400 opacity-70 ">
            <TypingEffect words={words} delay={1000} hideCursor={true} />
          </h3>
          <p className="my-4 text-white opacity-75 p-4 md:px-0">Sou apaixonada por tecnologia e estou sempre em busca de novos conhecimentos e habilidades para aprimorar meu trabalho. </p>
          <div className="flex gap-x-4 flex-nowrap justify-center md:justify-start items-center">
            <a href="/curriculo-ghalba.pdf" download>
              <Button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-lg px-6 py-2">Baixar Currículo</Button>
            </a>
            <SocialIcons/>
          </div>
        </div>
        <div className="wrapper-img">
          {/* <Image src={buscaLivrosImg} alt="imagem codigos" width={150} height={140} className="imgcodeHero"/> */}
        </div>
      </section>
      <Faixa/>
      
      <AboutSection/>

        <SectionService/>
        <Portifolio />
        <Contato/>
    </main>
  );
}