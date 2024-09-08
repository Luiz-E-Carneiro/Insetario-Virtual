import React, { useState, useEffect } from 'react';

export default function Form({ sendFormData }) {
    const [formData, setFormData] = useState({
        commonName: '',
        scientificName: '',
        ordem: '',
        family: '',
        predador: false,
        culture: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleReset = () => {
        setFormData({
            commonName: '',
            scientificName: '',
            ordem: '',
            family: '',
            predador: false,
            culture: '',
        });
    };

    useEffect(() => {
        sendFormData(formData);
    }, [formData, sendFormData]);

    return (
        <div className="form-container bg-black/[.25] w-full h-fit rounded px-4 py-3 mt-4 backdrop-blur-sm z-10 text-white">
            <h1 className="text-xl font-semibold">Filtragem</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className='col-span-1 flex flex-col justify-between gap-4'>
                    <div className="flex gap-2 items-center text-nowrap">
                        <label htmlFor="commonName" className='font-semibold'>Nome Comum:</label>
                        <input
                            type="text"
                            id="commonName"
                            name="commonName"
                            value={formData.commonName}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-white outline-none"
                        />
                    </div>
                    <div className="flex gap-2 items-center text-nowrap">
                        <label htmlFor="scientificName" className='font-semibold'>Nome Científico:</label>
                        <input
                            type="text"
                            id="scientificName"
                            name="scientificName"
                            value={formData.scientificName}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b-2 border-white outline-none"
                        />
                    </div>

                </div>
                <div className='col-span-1 flex flex-col justify-between gap-4'>
                    <div className="flex gap-2 items-center text-nowrap">
                        <label htmlFor="ordem" className='font-semibold'>Ordem:</label>
                        <select
                            id="ordem"
                            name="ordem"
                            value={formData.ordem}
                            onChange={handleChange}
                            className="w-full bg-white/25 border-b-2 border-white outline-none"
                        >
                            <option value="" disabled>Todas</option>
                            <option value="ordem1">Ordem 1</option>
                            <option value="ordem2">Ordem 2</option>
                        </select>
                    </div>
                    <div className="flex gap-2 items-center text-nowrap">
                        <label htmlFor="family" className='font-semibold'>Família:</label>
                        <select
                            id="family"
                            name="family"
                            value={formData.family}
                            onChange={handleChange}
                            className="w-full bg-white/25 border-b-2 border-white outline-none"
                        >
                            <option value="" disabled>Todas</option>
                            <option value="family1">Família 1</option>
                            <option value="family2">Família 2</option>
                        </select>
                    </div>
                </div>
                <div className="h-6 md:h-full sm:col-span-2 flex lg:col-span-1 lg:flex-col lg:justify-between gap-4">
                    <div className="flex items-center">
                        <label htmlFor="predador" className='font-semibold'>Predador:</label>
                        <input
                            type="checkbox"
                            id="predador"
                            name="predador"
                            checked={formData.predador}
                            onChange={handleChange}
                            className="ml-3"
                        />
                    </div>
                    {!formData.predador && (
                        <div className="w-full sm:w-auto flex-grow flex flex-col sm:flex-row gap-2 items-start text-nowrap">
                            <label htmlFor="culture" className='font-semibold'>Cultura atacada:</label>
                            <select
                                id="culture"
                                name="culture"
                                value={formData.culture}
                                onChange={handleChange}
                                className="w-full bg-white/25 border-b-2 border-white outline-none"
                            >
                                <option value="" disabled>Todas</option>
                                <option value="cultura1">Cultura 1</option>
                                <option value="cultura2">Cultura 2</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 font-semibold bg-white/45 text-white rounded duration-200 ease-in-out hover:bg-white/25"
            >
                Limpar
            </button>
        </div >
    );
};