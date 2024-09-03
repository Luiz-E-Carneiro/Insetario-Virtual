export default function CardTeam({ picture, name, func }) {

    return (
        <div className="flex gap-0.5 items-center w-full pl-3 pr-2 py-2 max-lg:h-22 md:w-5/12 rounded-l-full md:rounded-lg  shadow-md mb-4 bg-white/65">
            <img src={picture} alt={name} className="h-16 w-16 rounded-full object-cover" />
            <div className="py-2 flex-grow flex flex-col justify-center items-center text-center text-xl">
                <h3>{name}</h3>
                <p className="text-gray-600">{func}</p>
            </div>
        </div>
    );
};