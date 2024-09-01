import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";
import Image from 'next/image';
import imagemPessoal from '../assets/images/imagemPessoal.jpg';
import { AboutSection } from "@/components/About/About";
import {TypingEffect} from "@/components/TypingEffect/TypingEffect";




export default function Home() {
  const words = ["Desenvolvedora Front-End", "Apaixonada por tecnologias", "Criadora de soluções inovadoras"];



  return (
    <main className=" flex-col justify-center">
      <section className="md:flex md:justify-around content-center md:py-40 h-auto">
        <div className="text-center md:text-left md:max-w-xl">
          <h3 className="text-4xl font-bold text-white mb-4">
            Olá, meu nome é
          </h3>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">
            Ghalba Vieira
          </h2>
          <h3 className="md:text-3xl font-medium text-blue-300 opacity-70 ">
            <TypingEffect words={words} delay={1000} hideCursor={true} />
          </h3>
          <p className="my-4 text-white opacity-75 p-4 md:px-0">Sou apaixonada por tecnologia e estou sempre em busca de novos conhecimentos e habilidades para aprimorar meu trabalho. </p>
          <div className="flex gap-x-4">
            <Button/> 
            <SocialIcons/>
          </div>
        </div>
        <Image src={imagemPessoal} alt="Logo"  />
      </section>
      <Separator/>
      <AboutSection/>
      <Separator/>
      <section>
        <h2 className="text-4xl text-center my-8"><strong>Serviços</strong></h2>
      </section>
      <Separator/>
    </main>
  );
}