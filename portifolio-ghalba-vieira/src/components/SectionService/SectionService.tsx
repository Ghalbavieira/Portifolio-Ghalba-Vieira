import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Image from 'next/image';
import programming from '@/assets/images/programming.jpg';
import { Button } from "../ui/button";

export function SectionService(){
    return (
        <section className="text-center ">
            <h2 className="title underline-effect my-10 text-white text-center"><strong>Serviços</strong></h2>
            <div className="md:flex gap-10 justify-center">
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
            <div className="md:flex mt-10 gap-10 justify-center">
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
                <Card className="m-10">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription> <Image src={programming} alt="imagem codigos" width={300} height={300} className="imgcode"/></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>

        
        
        </section>
    );
}