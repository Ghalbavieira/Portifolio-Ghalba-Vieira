import { htmlIcon, cssIcon, jsIcon, reactIcon, jqueryIcon, bootstrapIcon, tailwindcssIcon, nextdotjsIcon, firebaseIcon, gitIcon, githubIcon, mysqlIcon, amazonwebservicesIcon} from '@/assets/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";
import Image from 'next/image';
import { Button } from '../ui/button';
import "../About/about.css";

export function AboutSection() {
    return(
        <section className="text-center text-white mt-10">
            <h2 className="title underline-effect mb-10"><strong>Sobre Mim</strong></h2>
            <div className='flex justify-around content-center flex-wrap align-middle mb-20'>
                <div className="text-center md:text-left break-words max-w-96 animate-fadeIn">
                    <h3 className="my-3 text-2xl text-teal-600"><strong>Quem sou eu?</strong></h3>
                    <p className="my-1">Desenvolvedora Front-End com 5 anos de experiência em criação de sites, landing pages e e-commerces. </p>
                    <p>Estou em constante evolução, aprendendo e adaptando-me às mudanças e inovações no campo do desenvolvimento web.</p>
                    
                    <Button className='my-4 p-5'>Descubra Mais</Button>
                </div>
                <div className="my-3 max-w-96 animate-fadeIn text-center">
                    <h4>Linguagens e Tecnologias:</h4>
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
                <div className='max-w-96 text-left content-center flex-wrap align-middle animate-fadeIn'>
                    <p> Custom Website Development</p>
                    <p> Responsive Design</p>
                    <p> User-Friendly Interface</p>
                    <p> Performance Optimization</p>
                </div>
            </div>
        </section>
    );
}