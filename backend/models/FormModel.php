<?php

namespace Model;

final class FormModel extends Model
{

    public function selectFilter($vo){}
    public function selectAll($vo)
    {
        $db = new Database();

        $queryOrdensFamilias = "
        SELECT 
            o.id AS ordem_id,
            o.nome_ordem,
            f.id AS familia_id,
            f.id_ordem,
            f.nome_familia
        FROM 
            ordem o
        LEFT JOIN 
            familia f ON o.id = f.id_ordem
        ORDER BY 
            o.nome_ordem, f.nome_familia
        ";

        $ordensFamiliasData = $db->select($queryOrdensFamilias);
        $ordens = [];
        $familias = [];

        foreach ($ordensFamiliasData as $row) {
            if (!isset($ordens[$row['ordem_id']])) {
                $ordens[$row['ordem_id']] = [
                    'ordem_id' => $row['ordem_id'],
                    'nome_ordem' => $row['nome_ordem']
                ];
            }

            if (!empty($row['familia_id'])) {
                $familias[] = [
                    'familia_id' => $row['familia_id'],
                    'nome_familia' => $row['nome_familia'],
                    'id_ordem' => $row['id_ordem']
                ];
            }
        }

        $ordens = array_values($ordens);
        $familias = array_values($familias);

        $queryCulturas = "
            SELECT 
                id AS cultura_id,
                nome_cultura
            FROM 
                culturas
            ORDER BY 
                nome_cultura
        ";

        $culturasData = $db->select($queryCulturas);
        $culturas = [];

        foreach ($culturasData as $row) {
            $culturas[] = [
                'cultura_id' => $row['cultura_id'],
                'nome_cultura' => $row['nome_cultura']
            ];
        }

        return [
            'ordens' => $ordens,
            'familias' => $familias,
            'culturas' => $culturas
        ];
    }



    public function selectOne($vo) {}

    public function insert($vo) {}

    public function update($vo) {}

    public function delete($vo) {}
}
