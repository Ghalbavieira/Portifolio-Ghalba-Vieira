import "../Header/header.css";
import { Button } from "../ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-gray-600 h-20 text-white text-xl flex justify-around content-center flex-wrap">
            <h1 className="text-2xl">Ghalba Vieira</h1>
            <div className=" hidden md:flex flex gap-4">
                <nav className="cursor-pointer flex gap-x-8 items-center">
                    <a href="#about" className="underline-effect">Sobre Mim</a>
                    <a href="#portifolio" className="underline-effect">Portifolio</a>
                    <a href="#contato" className="underline-effect">Contato</a>
                </nav>
                <a href="/curriculo-ghalba.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="border-2 border-blue-600 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-lg px-6 py-2">Currículo</Button>
                </a>
            </div>
            <div className="visible md:hidden justify-start">
            <Sheet>
                <SheetTrigger>Menu</SheetTrigger>
                <SheetContent className="w-[250px] sm:w-[340px] justify-start">
                <SheetHeader className="pt-10">
                    <SheetTitle><a href="/">Home</a></SheetTitle>
                    <SheetTitle><a href="/about">Sobre Mim</a></SheetTitle>
                    <SheetTitle><a href="">Portifolio</a></SheetTitle>
                    <SheetTitle><a href="">Contato</a></SheetTitle>
                </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </header>

    );
}