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

            if (!isset($organizedData[$ordem])) {
                $organizedData[$ordem] = [];
            }

            if (!isset($organizedData[$ordem][$familia])) {
                $organizedData[$ordem][$familia] = [];
            }

            $organizedData[$ordem][$familia][] = [
                'id' => $row['id'],
                'nome_cientifico' => $row['nome_cientifico'],
                'nomes_comuns' => explode(',', $row['nomes_comuns'])
            ];
        }

        return $organizedData;
    }
}
