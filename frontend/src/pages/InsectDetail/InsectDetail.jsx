
import { useParams } from "react-router-dom";

export default function InsectDetail() {
    const { id } = useParams();

    return (
        <div className="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-ladybird2 bg-fixed bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly text-white">
            <h1 className="pt-4 text-xl font-semibold text-white">Detalhes sobre o inseto</h1>

            <div className="bg-black/[.25] w-full h-fit rounded px-1 sm:px-3 py-3 mt-4 backdrop-blur-sm z-10">
                
            </div>
        </div>
    );
}