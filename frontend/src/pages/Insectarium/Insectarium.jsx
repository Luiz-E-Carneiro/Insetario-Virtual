import React, { useState } from 'react';
import Form from './Form';

export default function Insectarium() {
    const [formValues, setFormValues] = useState({});

    const handleFormData = (data) => {
        setFormValues(data);
    };

    return (
        <div className="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-ladybird2 bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly">
            <h1 className="pt-4 text-xl font-semibold text-white">Insetário</h1>
            
            <Form sendFormData={handleFormData} />
            
            <div className="bg-black/[.25] w-full h-fit rounded px-4 py-3 mt-4 backdrop-blur-sm z-10">

            </div>
        </div>
    );
}