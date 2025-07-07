import Link from "next/link";
import { SocialIcons } from "@/components/IconsSocial/SocialIcons";

export function Contato() {
  return (
    <section
      id="contato"
      className="bg-sky-900 text-white py-16 px-6 sm:px-12 lg:px-24 text-center"
    >
      <h2 className="text-3xl font-extrabold underline underline-offset-8 mb-8">
        Contato
      </h2>

      <p className="text-lg max-w-xl mx-auto mb-4">
        Gostou do meu trabalho? Vamos conversar!
      </p>
      <p className="text-md max-w-md mx-auto mb-8">
        Você pode me encontrar nas redes sociais ou enviar <br /> um e-mail diretamente para
      </p>

      <Link
        href="mailto:ghalba.vieira@example.com"
        className="inline-block bg-white text-sky-900 font-semibold rounded-md px-8 py-3 hover:bg-sky-100 transition"
        aria-label="Enviar email para Ghalba Vieira"
      >
        ghalbavieira@gmail.com
      </Link>

      <div className="flex justify-center items-center gap-6 mt-10">
        <SocialIcons />
      </div>
    </section>
  );
}
