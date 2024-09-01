import Image from 'next/image';
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";
import { Button } from '@/components/ui/button';
import { AboutSection } from '@/components/About/About';
import { htmlIcon, cssIcon, jsIcon, reactIcon, jqueryIcon, bootstrapIcon, tailwindcssIcon, nextdotjsIcon, firebaseIcon, gitIcon, githubIcon, mysqlIcon, amazonwebservicesIcon} from '@/assets/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import imagemPrincipal from '@/assets/images/imagemPrincipal.jpg';


export default function About() {
    return(
        <>
        <section className='md:flex md:justify-around'>
            <div className="text-center md:text-left break-words max-w-96 animate-fadeIn p-4">
                <h3 className="my-3 text-2xl text-teal-600"><strong>Um pouco sobre mim ?</strong></h3>
                <p className="my-1">Desenvolvedora Front-End com 5 anos de experiência em criação de sites, landing pages e e-commerces. Graduada em Análise de Sistemas e pós-graduada em Engenharia de Software, com 3 anos de experiência internacional, onde adquiri habilidades interculturais e trabalho em equipe.</p>
                <div className="my-3 max-w-96 animate-fadeIn text-center">
                <h2 className='underline-effect title'><strong>Linguagens e Tecnologias</strong></h2>
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
            <Image src={imagemPrincipal} alt="Logo" className='p-5' />
        </section>
        <section>
            <h3>Outras habilidades:</h3>
        - Experiência em trabalho remoto;
        - Experiência e práticas com Scrum;
        - Gosto por escrever código bem projetado, testável e eficiente;
        - Autodidata, apaixonado por aprender, ensinar e criar.
            <h3>Experiência em</h3>
            - JavaScript e TypeScript;
            - Sass e CSS-In-JS (styled-components);
            - Gerenciamento de estado (Redux, Context API e custom hooks);
            - Testes unitários com Jest, React Testing Library, PhpUnit e Mocha;
            - Desenvolvimento móvel para Android com React Native;
            - PHP (frameworks Laravel e CodeIgniter);
            - Criação de componentes reutilizáveis e documentação com Storybook;
            - Refatoração e depuração (debugging)
        </section>
        </>
    );
}