import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";

export function Contato() {
    return (
        <section className="bg-slate-400 text-center text-sky-900 pt-10 px-30" id='contato'>
            <h2 className="title underline-effect mb-10 font-bold">Contato</h2>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className="text-lg">Gostou do meu trabalho? Vamos conversar!</p>
                <p className="text-md">Você pode me encontrar nas redes sociais ou enviar um e-mail.</p>
                <Link href="mailto:ghalba.vieira@example.com" className='my-4 p-5'>Enviar Mensagem</Link>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
               <SocialIcons/>
            </div>
        </section>
    );
}