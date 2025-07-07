import { htmlIcon, cssIcon, jsIcon, reactIcon, jqueryIcon, bootstrapIcon, tailwindcssIcon, nextdotjsIcon, firebaseIcon, gitIcon, githubIcon, mysqlIcon, amazonwebservicesIcon } from '@/assets/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";
import Image from 'next/image';
import { Button } from '../ui/button';
import "../About/about.css";

export function AboutSection() {
    return (
        <section className="bg-slate-200 text-center text-sky-900 pt-10 px-30" id='about'>
            <h2 className="title underline-effect mb-10 font-bold">Sobre Mim</h2>
            <div className='flex flex-row justify-center align-middle pb-20 px-4 gap-10 md:gap-80 max-w-full flex-wrap md:flex-nowrap'>
                <div className="text-center max-w-lg md:text-left break-words animate-fadeIn">
                    <h3 className="my-3 text-2xl text-teal-600"><strong>Quem sou eu?</strong></h3>
                    <p className="my-1">Sou <strong>Desenvolvedora Front-End</strong> com experiência no desenvolvimento de soluções web, incluindo sites, landing pages e e-commerces. Tenho forte interesse em me especializar ainda mais em Front-End, aprimorando minhas habilidades em <u>Inteligência Artificial e acessibilidade</u>. Também pretendo expandir meus conhecimentos em back-end, e estou constantemente em busca de novos desafios para aprimorar minhas habilidades.
                    </p>
                    <p>Atualmente, estou cursando uma pós-graduação em Engenharia de Software, o que me permite expandir minha expertise e aplicar as melhores práticas em projetos inovadores. Além da minha atuação como desenvolvedora, sou <strong>Tech Educadora</strong>, ministrando aulas de HTML, CSS e Bootstrap para novos desenvolvedores, ajudando-os a entrar no mercado de tecnologia.</p>

                    <Button className='my-4 p-5'>Descubra Mais</Button>
                </div>
                <div className="my-3 animate-fadeIn text-center">
                    <h4>Linguagens e Tecnologias:</h4>
                    <div className="flex-auto justify-around">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={htmlIcon} alt="HTML5" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                <TooltipContent>
                                    <p>HTML5</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={cssIcon} alt="CSS3" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                <TooltipContent>
                                    <p>CSS3</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={jsIcon} alt="JavaScript" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                <TooltipContent>
                                    <p>JavaScript</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><Image src={bootstrapIcon} alt="bootstrapIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                <TooltipContent>
                                    <p>Bootstrap</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={jqueryIcon} alt="jqueryIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Jquery</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={reactIcon} alt="react" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>React.js</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={tailwindcssIcon} alt="tailwindcssIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Tailwindcss</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={nextdotjsIcon} alt="nextdotjsIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Next.js</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={firebaseIcon} alt="firebaseIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Firebase</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={gitIcon} alt="gitIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Git</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={githubIcon} alt="githubIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={mysqlIcon} alt="mysqlIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Mysql</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Image src={amazonwebservicesIcon} alt="amazonwebservicesIcon" width={45} height={45} className='img-icon' /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>AWS</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}