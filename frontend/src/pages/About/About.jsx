import CardTeam from "./CardTeam";
import exemplo_pessoa from "./../../assets/test/exemplo_foto.jpeg";

const team = [
    { picture: exemplo_pessoa, name: "Regina da Silva Broba", func: "Orientadora" },
    { picture: exemplo_pessoa, name: "Thiago Grassel dos Reis", func: "Colaborador" },
    { picture: exemplo_pessoa, name: "Emily Alguma Coisa", func: "Fotógrafa" },
    { picture: exemplo_pessoa, name: "Ana Outra Coisa Também", func: "Fotógrafa" },
    { picture: exemplo_pessoa, name: "Luiz Eduardo Carneiro", func: "Programador" }
]

export default function About() {
    return (
        <>
            <div className="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-fixed bg-ladybird1 bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly">
                <h1 className="pt-4 text-xl font-semibold text-white">Sobre o Projeto</h1>

                <div className="bg-black/[.25] w-full h-fit rounded px-4 py-3 mt-4 backdrop-blur-sm z-10">
                    <section className="w-full text-justify text-white pl-4">
                        <p>
                            Molestiae tenetur recusandae id commodi aliquam possimus, et quasi culpa aspernatur perspiciatis ad velit ab delectus ex iure odio nesciunt cumque cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore architecto ea corporis, aliquid blanditiis earum quas, ipsam error at adipisci repellendus dolores provident? Tenetur quibusdam ipsa obcaecati, porro voluptatem neque!
                        </p>
                    </section>
                    <section>
                        <h2 className="mt-3 text-xl font-semibold text-white">Equipe:</h2>
                        <div className="w-full h-fit flex justify-center gap-4 flex-wrap mt-3">
                            {team.map(member => (
                                <CardTeam
                                    key={member.name}
                                    picture={member.picture}
                                    name={member.name}
                                    func={member.func}
                                />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className="mt-3 text-xl font-semibold text-white">Motivação:</h2>
                        <p className="w-full text-justify text-white pl-4">
                            Architecto, maiores ea! Aut tempora voluptatum quo porro magnam assumenda, rem veniam, laboriosam voluptas quisquam, at nobis in dignissimos commodi ducimus impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores consequatur dolor itaque cum reprehenderit nam, eveniet et doloremque maxime, tempora ad nesciunt. Itaque, molestiae? Ipsa debitis cumque ratione nulla?
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}