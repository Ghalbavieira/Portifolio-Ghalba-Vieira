import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import Image from 'next/image';
import programming from '@/assets/images/programming.jpg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { amazonwebservicesIcon, bootstrapIcon, cssIcon, firebaseIcon, githubIcon, gitIcon, htmlIcon, jqueryIcon, jsIcon, mysqlIcon, nextdotjsIcon, reactIcon, tailwindcssIcon } from "@/assets/icons";
import { Button } from "../ui/button";

export function Portifolio() {
    return(<>
        <section className="bg-slate-200 text-center text-slate-400 py-16 md:py-28 mt-24 md:mt-48">
        <h2 className="title underline-effect text-center text-sky-900"><strong>Projetos</strong></h2>
          <div className="max-w-full flex justify-center content-center pt-10 md:pt-20">
            <Carousel>
              <CarouselContent aria-roledescription="carousel">
                <CarouselItem>
                  <div className="md:flex justify-around content-center text-sky-900">
                      <Image src={programming} alt="imagem codigos" width={300} height={350} className="imgcode inline"/>
                    <div>
                      <h3>Nome do Projeto</h3>
                      <p></p>
                      <div>
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                      </div>
                    </div>
                    <div>
                      <h3>Tecnologias utilizadas</h3>
                      <div className="flex-auto justify-around">
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={htmlIcon} alt="HTML5" width={45} height={45}  className='img-icon'/></TooltipTrigger>
                                <TooltipContent>
                                <p>HTML5</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={cssIcon} alt="CSS3" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                <TooltipContent>
                                <p>CSS3</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={jsIcon} alt="JavaScript" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                <TooltipContent>
                                <p>JavaScript</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={bootstrapIcon} alt="bootstrapIcon" width={45} height={45}  className='img-icon'/></TooltipTrigger>
                                <TooltipContent>
                                <p>Bootstrap</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                            <div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={jqueryIcon} alt="jqueryIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Jquery</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={reactIcon} alt="react" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>React.js</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={tailwindcssIcon} alt="tailwindcssIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Tailwindcss</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={nextdotjsIcon} alt="nextdotjsIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Next.js</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={firebaseIcon} alt="firebaseIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Firebase</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={gitIcon} alt="gitIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Git</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={githubIcon} alt="githubIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={mysqlIcon} alt="mysqlIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>Mysql</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><Image src={amazonwebservicesIcon} alt="amazonwebservicesIcon" width={45} height={45} className='img-icon'/></TooltipTrigger>
                                        <TooltipContent>
                                        <p>AWS</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
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
          </div>
      </section>
      </>
    );
}