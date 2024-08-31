import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";





export default function Home() {
  return (
    <main className="flex flex-col justify-center md:w-10/12">
      <section className="flex flex-col justify-center md:justify-start p-6 h-2/3">
        <div>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Olá, meu nome é
          </h3>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">
            Ghalba Vieira
          </h2>
          <h3 className="text-xl font-medium text-gray-700">
            e sou Desenvolvedora Front End
          </h3>
          <SocialIcons/>
        </div>
        <img src=""></img>
      </section>
      <Separator/>
      <section className="">
        <h2 className="text-4xl text-center my-8"><strong>Sobre Mim</strong></h2>
        <div className="md:w-1/2 break-words p-4">
          <h3 className="my-3 text-2xl text-teal-600"><strong>Quem sou eu?</strong></h3>
          <p className="my-1">Olá! Sou uma Desenvolvedora Front-End com 5 anos de experiência em desenvolvimento web, especializada em criar sites, landing pages, e-commerces e softwares personalizados. Com graduação em Análise e Desenvolvimento de Sistemas pela Estácio e uma pós-graduação em Engenharia de Software, tenho uma sólida base técnica e um compromisso constante com a inovação e a aplicação de tecnologias modernas para entregar resultados excepcionais.</p>
          <p className="my-2">Minha trajetória inclui 3 anos de experiência na Europa, onde desenvolvi habilidades interculturais, fluência em novos idiomas e uma forte capacidade de trabalhar em equipe em ambientes diversos.</p>
          <h6 className="my-3">Competências Técnicas:</h6>
          <ul className="my-3">
            <li>- Linguagens e Tecnologias: HTML, CSS, JavaScript</li>
            <li>- Frameworks e Bibliotecas: Bootstrap, jQuery, React (em aprendizado), TailwindCSS, Node.js</li>
            <li>- Bancos de Dados: MySQL, SQL, Firebase</li>
            <li>- Cloud: Azure, AWS</li>
            <li>- Ferramentas de Desenvolvimento: Git, GitHub, VSCode, Eclipse, Visual Studio</li>
            <li>- Metodologias: Ágil, Scrum, Design Responsivo </li>
          </ul>
          <p>Sou apaixonada por tecnologia e estou sempre em busca de novos conhecimentos e habilidades para aprimorar meu trabalho. Estou em constante evolução, aprendendo e adaptando-me às mudanças e inovações no campo do desenvolvimento web. </p>
        <Button/>
        </div>
      </section>
      <Separator/>
      <section>
        <h2 className="text-4xl text-center my-8"><strong>Serviços</strong></h2>
      </section>
      <Separator/>
      <section className="max-w-full">
        <h2 className="text-4xl text-center my-8"><strong>Projetos</strong></h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>
                <img src=""></img>
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
                <img src=""></img>
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
                <img src=""></img>
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
    </main>
  );
}