import React, { useState } from 'react';
import Form from './Form';
import CardInsect from './CardInsect';


const ordens = [
    { id_ordem: 1, nome_ordem: 'Lepidoptera' },
    { id_ordem: 2, nome_ordem: 'Orthoptera' },
    { id_ordem: 3, nome_ordem: 'Phasmatodea' },
    { id_ordem: 4, nome_ordem: 'Coleoptera' },
    { id_ordem: 5, nome_ordem: 'Hemiptera' },
    { id_ordem: 6, nome_ordem: 'Hymenoptera' }
];

const familias = [
    { id_familia: 1, nome_familia: 'Psychidae', id_ordem: 1 },
    { id_familia: 2, nome_familia: 'Saturniidae', id_ordem: 1 },
    { id_familia: 3, nome_familia: 'Romaleidae', id_ordem: 2 },
    { id_familia: 4, nome_familia: 'Gryllidae', id_ordem: 2 },
    { id_familia: 5, nome_familia: 'Gryllotalpidae', id_ordem: 2 },
    { id_familia: 6, nome_familia: 'Proscopiidae', id_ordem: 2 },
    { id_familia: 7, nome_familia: 'Tettigoniidae', id_ordem: 2 },
    { id_familia: 8, nome_familia: 'Phasmatidae', id_ordem: 3 },
    { id_familia: 9, nome_familia: 'Cerambycidae', id_ordem: 4 },
    { id_familia: 10, nome_familia: 'Melyridae', id_ordem: 4 },
    { id_familia: 11, nome_familia: 'Tenebrionidae', id_ordem: 4 },
    { id_familia: 12, nome_familia: 'Phylloxeridae', id_ordem: 5 },
    { id_familia: 13, nome_familia: 'Vespidae', id_ordem: 6 }
];

const insetos = [
    {id_inseto: 1, nome_cientifico: 'Oiketicus kirbyi', id_ordem: 1, id_familia: 1, predador: false, importancia: 'O bicho-cesto...', morfologia: 'O macho atinge a fase adulta...' },
    {id_inseto: 2, nome_cientifico: 'Automeris sp.', id_ordem: 1, id_familia: 2, predador: false, importancia: 'São polífagas...', morfologia: 'São mariposas...' },
    {id_inseto: 3, nome_cientifico: 'Chromacris sp.', id_ordem: 2, id_familia: 3, predador: false, importancia: 'São polífagos...', morfologia: 'Os adultos possuem...' },
    {id_inseto: 4, nome_cientifico: 'Gryllus assimilis', id_ordem: 2, id_familia: 4, predador: false, importancia: 'Causam danos às hortaliças...', morfologia: 'O adulto possui coloração...' },
    {id_inseto: 5, nome_cientifico: null, id_ordem: 2, id_familia: 5, predador: false, importancia: 'Causam danos às hortaliças...', morfologia: 'Reúne as paquinhas...' },
    {id_inseto: 6, nome_cientifico: null, id_ordem: 2, id_familia: 6, predador: false, importancia: 'São insetos fitófagos...', morfologia: 'Compreende as taquarinhas...' },
    {id_inseto: 7, nome_cientifico: null, id_ordem: 2, id_familia: 7, predador: false, importancia: 'São insetos fitófagos...', morfologia: 'Agrupa as esperanças...' },
    {id_inseto: 8, nome_cientifico: null, id_ordem: 3, id_familia: 8, predador: false, importancia: 'Os bichos-paus...', morfologia: 'São insetos que se distinguem...' },
    {id_inseto: 9, nome_cientifico: 'Acrocinus longimanus', id_ordem: 4, id_familia: 9, predador: false, importancia: 'Broqueiam o tronco...', morfologia: 'Os adultos são besouros...' },
    {id_inseto: 10, nome_cientifico: 'Hedypathes betulinus', id_ordem: 4, id_familia: 9, predador: false, importancia: 'É a principal praga...', morfologia: 'São besouros do grupo...' },
    {id_inseto: 11, nome_cientifico: 'Psygmatocerus wagleri', id_ordem: 4, id_familia: 9, predador: false, importancia: 'As larvas perfuram...', morfologia: 'São besouros do grupo...' },
    {id_inseto: 12, nome_cientifico: 'Retrachydes thoracicus', id_ordem: 4, id_familia: 9, predador: false, importancia: 'Nos pomares malcuidados...', morfologia: 'É um besouro serra-pau...' },
    {id_inseto: 13, nome_cientifico: 'Astylus variegatus', id_ordem: 4, id_familia: 10, predador: false, importancia: 'Suas larvas atacam as sementes...', morfologia: 'Os adultos alimentam-se de pólen...' },
    {id_inseto: 14, nome_cientifico: 'Lagria villosa', id_ordem: 4, id_familia: 11, predador: false, importancia: 'Os adultos alimentam-se de folhas...', morfologia: 'Os adultos têm corpo alongado...' },
    {id_inseto: 15, nome_cientifico: 'Daktulosphaira vitifoliae', id_ordem: 5, id_familia: 12, predador: false, importancia: 'No início, a filoxera...', morfologia: 'Descreva a morfologia aqui...' },
    {id_inseto: 16, nome_cientifico: null, id_ordem: 6, id_familia: 13, predador: true, importancia: 'Na fase adulta, nutrem-se...', morfologia: 'São os insetos conhecidos...' }
];

const imagens = [
    { id_imagem: 1, id_inseto: 1, caminho_imagem: '/insetos_imagem/1.png' },
    { id_imagem: 2, id_inseto: 2, caminho_imagem: '/insetos_imagem/2.png' },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: '/insetos_imagem/3.png' },
    { id_imagem: 4, id_inseto: 4, caminho_imagem: '/insetos_imagem/4.png' },
    { id_imagem: 5, id_inseto: 5, caminho_imagem: '/insetos_imagem/5.png' },
    { id_imagem: 6, id_inseto: 6, caminho_imagem: '/insetos_imagem/6.png' },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: '/insetos_imagem/7.png' },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: '/insetos_imagem/8.png' },
    { id_imagem: 9, id_inseto: 9, caminho_imagem: '/insetos_imagem/9.png' },
    { id_imagem: 10, id_inseto: 10, caminho_imagem: '/insetos_imagem/10.png' },
    { id_imagem: 11, id_inseto: 11, caminho_imagem: '/insetos_imagem/11.png' },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: '/insetos_imagem/12.png' },
    { id_imagem: 13, id_inseto: 13, caminho_imagem: '/insetos_imagem/13.png' },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: '/insetos_imagem/14.png' },
    { id_imagem: 15, id_inseto: 15, caminho_imagem: '/insetos_imagem/15.png' },
    { id_imagem: 16, id_inseto: 16, caminho_imagem: '/insetos_imagem/16.png' },
];

const nomesComuns = [
    { id_inseto: 1, nome_comum: 'bicho-cesto' },
    { id_inseto: 2, nome_comum: 'mariposa olho de pavão alaranjado' },
    { id_inseto: 3, nome_comum: 'gafanhoto-militar' },
    { id_inseto: 3, nome_comum: 'gafanhoto-soldado' },
    { id_inseto: 4, nome_comum: 'grilo' },
    { id_inseto: 5, nome_comum: 'paquinha' },
    { id_inseto: 5, nome_comum: 'cachorrinho-da-terra' },
    { id_inseto: 6, nome_comum: 'taquarinha' },
    { id_inseto: 7, nome_comum: 'esperança' },
    { id_inseto: 7, nome_comum: 'bicho-folha' },
    { id_inseto: 8, nome_comum: 'bicho-pau' },
    { id_inseto: 9, nome_comum: 'arlequim-da-mata' },
    { id_inseto: 10, nome_comum: 'broca-da-erva-mate' },
    { id_inseto: 10, nome_comum: 'corintiano' },
    { id_inseto: 11, nome_comum: 'besouro serrador' },
    { id_inseto: 12, nome_comum: 'besouro serra-pau' },
    { id_inseto: 13, nome_comum: 'larva angorá' },
    { id_inseto: 14, nome_comum: 'idiamim' },
    { id_inseto: 15, nome_comum: 'filoxera' },
    { id_inseto: 16, nome_comum: 'vespa' },
    { id_inseto: 16, nome_comum: 'marimbondo' },
  ];
  

const culturas = [
    { id_cultura: 1, nome_cultura: 'Milho' },
    { id_cultura: 2, nome_cultura: 'Soja' },
    { id_cultura: 3, nome_cultura: 'Trigo' },
    { id_cultura: 4, nome_cultura: 'Café' },
    { id_cultura: 5, nome_cultura: 'Erva-mate' },
    { id_cultura: 6, nome_cultura: 'Uva' },
    { id_cultura: 7, nome_cultura: 'Arroz' },
    { id_cultura: 8, nome_cultura: 'Cana-de-açúcar' },
    { id_cultura: 9, nome_cultura: 'Laranja' },
    { id_cultura: 10, nome_cultura: 'Maçã' },
];

const insetos_culturas = [
    { id_inseto: 1, id_cultura: 4 },
    { id_inseto: 2, id_cultura: 4 },
    { id_inseto: 3, id_cultura: 1 },
    { id_inseto: 4, id_cultura: 1 },
    { id_inseto: 5, id_cultura: 1 },
    { id_inseto: 6, id_cultura: 1 },
    { id_inseto: 7, id_cultura: 1 },
    { id_inseto: 8, id_cultura: 3 },
    { id_inseto: 9, id_cultura: 2 },
    { id_inseto: 10, id_cultura: 5 },
];

const getImageForInseto = (id_inseto) => {
    const imagem = imagens.find((img) => img.id_inseto === id_inseto);
    return imagem ? imagem.caminho_imagem : 'path/to/default.jpg';
};

const getNomesComunsForInseto = (id_inseto) => {
    return nomesComuns
        .filter((nome) => nome.id_inseto === id_inseto)
        .map((nome) => nome.nome_comum)
        .join(', ') || 'Nome comum não disponível';
};

export default function Insectarium() {
    const [formValues, setFormValues] = useState({});
    const handleFormData = (data) => {
        setFormValues(data);
    };

    return (
        <div className="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-prayingMantis bg-fixed bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly text-white">
            <h1 className="pt-4 text-xl font-semibold">Insetário</h1>

            <Form sendFormData={handleFormData} />

            <div className="bg-black/[.25] w-full h-fit rounded px-1 sm:px-3 py-3 mt-4 backdrop-blur-sm z-10">

                {ordens.map((ordem) => (
                    <div key={ordem.id_ordem}>
                        <h2 className="text-2xl font-bold my-4">Ordem: {ordem.nome_ordem}</h2>
                        {familias
                            .filter((familia) => familia.id_ordem === ordem.id_ordem)
                            .map((familia) => (
                                <div key={familia.id_familia}>
                                    <h3 className="text-xl font-semibold my-2 ml-4">Família: {familia.nome_familia}</h3>

                                    <div className="flex flex-wrap">
                                        {insetos
                                            .filter((inseto) => inseto.id_familia === familia.id_familia)
                                            .map((inseto) => (
                                                <CardInsect
                                                    key={inseto.id_inseto}
                                                    id_inseto={inseto.id_inseto}
                                                    nomeComum={getNomesComunsForInseto(inseto.id_inseto)}
                                                    nomeCientifico={inseto.nome_cientifico}
                                                    imagem={getImageForInseto(inseto.id_inseto)}
                                                />
                                            ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                ))
                }
            </div>
        </div>
    );
}