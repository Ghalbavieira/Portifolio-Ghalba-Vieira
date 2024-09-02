import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Image from 'next/image';
import programming from '@/assets/images/programming.jpg';
import { Button } from "../ui/button";

export function SectionService(){
    return (
        <section className="text-center ">
            <h2 className="title underline-effect my-10 text-white text-center"><strong>Serviços</strong></h2>
            <div className="md:flex justify-around mb-8 ">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="md:flex justify-around">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="Flex justify-around">
                        <Button>Github</Button>
                        <Button>Sistema</Button>
                    </CardFooter>
                </Card>
            </div>

        
        
        </section>
    );
}