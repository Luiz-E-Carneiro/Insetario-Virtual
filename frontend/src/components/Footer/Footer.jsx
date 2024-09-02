import { RiInstagramFill, FaGithub, FaSquareXTwitter } from "react-icons/fa";
import logo_if from "./../../assets/brands/logo_if.png";
import logo_insetario from "./../../assets/brands/logo_insetario.png";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-8">
            <div className="px-10 max-sm:p-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-x-20 gap-y-8">
                    <div className="flex flex-col md:w-2/5">
                        <div className="flex items-center gap-4 mb-4">
                            <img src={logo_insetario} className="h-10 rounded-full" alt="Logo do Insetário Virtual" />
                            <span className="text-lg font-serif font-semibold">Insetário Virtual</span>
                            <img src={logo_if} className="h-8" alt="Logo do IFRS" />
                        </div>
                        <p className="text-sm text-gray-600">
                            Projeto de extensão do IFRS-Campus Bento Gonçalves de um insetário virtual com intuito de
                            auxiliar alunos de cursos técnicos que envolvam agronomia e comunidade em geral na
                            identificação de insetos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:w-2/3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Navegação</h2>
                            <ul className="text-gray-600 space-y-2">
                                <li>
                                    <a href="https://google.com" className="hover:underline">Sobre o Projeto</a>
                                </li>
                                <li>
                                    <a href="https://google.com" className="hover:underline">Insetário</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Contate-nos</h2>
                            <ul className="text-gray-600 space-y-2">
                                <li>
                                    <a href="mailto:email_exemplo@gmail.com" className="hover:underline">email_exemplo@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:+54999999999" className="hover:underline">(54) 99999-9999</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Siga-nos</h2>
                            <ul className="text-gray-600 space-y-2">
                                <li>
                                    <span><RiInstagramFill /> Instagram</span>
                                </li>
                                <li>
                                    <span><FaSquareXTwitter /> X</span>
                                </li>
                                <li>
                                    <span><FaGithub /> GitHub</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200" />
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                    <span className="text-sm text-gray-500">
                        © 2024 Insetário Virtual. Todos Direitos Reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}