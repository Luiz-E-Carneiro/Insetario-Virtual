import { RiInstagramFill, FaGithub, FaSquareXTwitter } from "react-icons/fa";

import logo_if from "./../../assets/brands/logo_if.png";
import logo_insetario from "./../../assets/brands/logo_insetario.png";

export default function Footer() {
    return (
        <>
            <footer class="w-full backdrop-blur-md">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <div>
                                <img src={logo_insetario} class="h-8 me-3" alt="Logo do Projeto" />
                                <span class="self-center text-2xl font-serif font-semibold whitespace-nowrap ">Insetário Virtual</span>
                                <img src={logo_if} class="h-8 me-3" alt="Logo do Projeto" />
                            </div>
                            <p className="text-justify whitespace-nowrap">
                                Projeto de extensão do IFRS-Campus Bento Gonçalves de um insertário virtual
                                com intuito de auxiliar alunos de cursostécnicos que envolvam agronomia e
                                comunidade em geral na indentificação de insetos.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Navegação</h2>
                                <ul class="text-gray-500 font-medium">
                                    <li class="mb-4">
                                        <a href="https://google.com" class="hover:underline">Sobre o Projeto</a>
                                    </li>
                                    <li>
                                        <a href="https://google.com" class="hover:underline">Insetário</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercas">Contate-nos</h2>
                                <ul class="text-gray-500">
                                    <li class="mb-4">
                                        <a href="https://google.com" class="hover:underline ">email_exemplo@gmail.com</a>
                                    </li>
                                    <li>
                                        <a href="https://google.com" class="hover:underline">(54) 99999-9999</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercas">Siga-nos</h2>
                                <ul class="text-gray-500">
                                    <li class="mb-4">
                                        <span><RiInstagramFill /> Instagram </span>
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
                    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div class=" flex justify-between">
                        <span class="text-sm text-gray-500 sm:text-center">
                            © 2024 Insetário Virtual. Todos Direitos Reservados.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}