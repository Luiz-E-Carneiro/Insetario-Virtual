import React, { useState } from "react";
import logo_if from "./../../assets/brands/logo_if.png";
import logo_insetario from "./../../assets/brands/logo_insetario.png";


export default function Header() {
    const Links = [
        { name: "Sobre o Projeto", link: "/" },
        { name: "Insetário", link: "/" }
    ];
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-16 shadow-md z-30 bg-white">
            <div className="flex items-center justify-between h-full px-10 max-sm:p-4">

                <div className="flex items-center gap-2 font-bold text-xl md:text-2xl cursor-pointer">
                    <img src={logo_insetario} alt="Logo do Insetário Virtual" className="h-11 sm:h-12 rounded-full" />
                    <span>Insetário Virtual</span>
                </div>

                <div className="flex gap-7 md:gap-20">
                    <nav
                        className={`absolute sm:static top-14 sm:top-0 right-0 w-fit sm:w-auto sm:flex items-center bg-white sm:bg-transparent transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[300px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'} sm:max-h-none sm:opacity-100`}>
                        <ul className="flex flex-col gap-10 p-4 sm:flex-row sm:items-center w-fit sm:w-auto">
                            {Links.map((link, index) => (
                                <li key={index} className="font-semibold text-lg">
                                    <a href={link.link} className="text-gray-800 hover:text-[#688A41] transition duration-500">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden sm:flex items-center gap-4">
                        <img
                            src={logo_if}
                            alt="Logo do IFR"
                            className={`h-11 transition duration-500 ${open ? 'hidden' : 'block'}`}
                        />
                    </div>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className={`sm:hidden flex items-center px-2 py-1 rounded-sm transition duration-100 hover:bg-slate-200 ${open ? 'z-50' : 'z-20'}`}>
                    {open ? "Fechar" : "Abrir"}
                </button>
            </div>
        </header>
    );
};