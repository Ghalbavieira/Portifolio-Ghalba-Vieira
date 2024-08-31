import "../Header/header.css";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export function Header() {
    return (
        <header className="bg-gray-800 h-20 text-white text-xl flex content-center justify-around flex-wrap">
            <h1 className="text-2xl">Ghalba Vieira</h1>
            <div className=" hidden md:flex">
                <nav className="cursor-pointer flex gap-x-8">
                    <a href="">Home</a>
                    <a href="">Sobre Mim</a>
                    <a href="">Portifolio</a>
                    <a href="">Contato</a>
                </nav>
                <Button></Button>
            </div>
            <div className="visible md:hidden justify-start">
            <Sheet>
                <SheetTrigger>Menu</SheetTrigger>
                <SheetContent className="w-[250px] sm:w-[340px] justify-start">
                <SheetHeader className="pt-10">
                    <SheetTitle><a href="">Home</a></SheetTitle>
                    <SheetTitle><a href="">Sobre Mim</a></SheetTitle>
                    <SheetTitle><a href="">Portifolio</a></SheetTitle>
                    <SheetTitle><a href="">Contato</a></SheetTitle>
                </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </header>

    );
}