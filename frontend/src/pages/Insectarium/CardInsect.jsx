import { useNavigate } from 'react-router-dom';

export default function CardInsect({ id_inseto, nomeComum, nomeCientifico, imagem }) {
    const navigate = useNavigate();
    
    const handleCardClick = () => {
        return navigate(`/Inseto/${id_inseto}`);
    }

    return (
        <>
            <div 
                onClick={handleCardClick} 
                className="bg-white shadow-md rounded-lg p-4 m-4 w-full h-28 sm:w-60 sm:h-64 flex sm:flex-col hover:bg-white/90 cursor-pointer"
            >
                <img src={imagem} alt={nomeComum} className="h-full sm:h-32 object-cover rounded-md" />
                <div className="w-full flex-grow flex flex-col justify-center items-center text-wrap text-center">
                    <h3 className="mt-2 text-lg font-bold text-black/90">{nomeComum.charAt(0).toUpperCase() + nomeComum.slice(1)}</h3>
                    <p className="text-gray-500 italic">{nomeCientifico == null ? "Não identificado" : nomeCientifico}</p>
                </div>
            </div>
        </>
    );
}
