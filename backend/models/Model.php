<?php

namespace Model;

abstract class Model
{
    abstract public function selectAll($vo);

    abstract public function selectOne($vo);

    abstract public function insert($vo);

    abstract public function update($vo);

    abstract public function delete($vo);

    public function organizeData($data)
    {
        $organizedData = [];

        foreach ($data as $row) {
            $ordem = $row['nome_ordem'];
            $familia = $row['nome_familia'];
            $idOrdem = $row['id_ordem'];
            $idFamilia = $row['id_familia'];
            $idsCulturas = !empty($row['ids_culturas']) ? explode(',', $row['ids_culturas']) : [];

            if (!isset($organizedData[$idOrdem])) {
                $organizedData[$idOrdem] = [
                    'nome_ordem' => $ordem,
                    'familias' => []
                ];
            }

            if (!isset($organizedData[$idOrdem]['familias'][$idFamilia])) {
                $organizedData[$idOrdem]['familias'][$idFamilia] = [
                    'nome_familia' => $familia,
                    'insetos' => []
                ];
            }

            $organizedData[$idOrdem]['familias'][$idFamilia]['insetos'][] = [
                'id' => $row['id_inseto'],
                'nome_cientifico' => $row['nome_cientifico'],
                'nomes_comuns' => explode(',', $row['nomes_comuns']),
                'ids_culturas' => $idsCulturas,
                'predador' => (bool)$row['predador']
            ];
        }

        return $organizedData;
    }
}
