import { SocialIcons } from "@/components/IconsSocial/SocialIcons";


export function Footer() {
    return (
        <footer className="bg-black p-20 flex justify-around content-center">
            <div>
                <h2 className="title text-slate-300">Ghalba Vieira</h2>
                <h4 className="text-slate-300">Front End Developer</h4>
                <SocialIcons/>
            </div>
            <div>
                
            </div>
        </footer>
    );
}