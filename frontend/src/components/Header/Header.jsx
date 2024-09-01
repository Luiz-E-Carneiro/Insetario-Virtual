import logo_if from "./../../assets/brands/logo_if.png";
import logo_insetario from "./../../assets/brands/logo_insetario.png";

export default function Header() {
    return(
        <>
            <header className="w-full h-12 box-border shadow-xl py-2 px-4 font-serif font-semibold flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo_insetario} alt="Logo do Projeto" className="h-full" />
                    <h1 className="text-xl">Insetario Virtual</h1>
                </div>
                <div>
                    <p>Sobre o Projeto</p>
                    <p>Insetario</p>
                </div>
                <img src={logo_if} alt="Logo do IF" className="h-full" />
            </header>
        </>
    );
}