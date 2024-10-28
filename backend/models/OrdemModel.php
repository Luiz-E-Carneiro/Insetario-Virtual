<?php

namespace Model;

use Model\VO\InsetoVO;

final class OrdemModel extends Model
{

    public function selectFilter($vo){}
    public function formSelectAll($vo)
    {
        $db = new Database();

        $query = "
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

        $data = $db->select($query);

        $ordens = [];
        $familias = [];

        foreach ($data as $row) {
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

        return [
            'ordens' => $ordens,
            'familias' => $familias
        ];
    }

    public function selectAll($vo)
    {
        // Área do ADM
    }


    public function selectOne($vo)
    {
        $db = new Database();

        $query = "";

        $binds = [':id_inseto' => $vo->getId()];
        $data = $db->select($query, $binds);
        if (count($data) > 0) {
            $inseto = new InsetoVO();

            return $inseto;
        }

        return null;
    }

    public function insert($vo)
    {
        // $db = new Database();
        // $query = "INSERT INTO alunos (nome, matricula) VALUES (:nome, :matricula)";
        // $binds = [
        //     ":nome" => $vo->getNome(),
        //     ":matricula" => $vo->getMatricula()
        // ];

        // return $db->execute($query, $binds);
    }

    public function update($vo)
    {
        // $db = new Database();
        // $query = "UPDATE alunos SET nome = :nome, matricula = :matricula WHERE id = :id";
        // $binds = [
        //     ":nome" => $vo->getNome(),
        //     ":matricula" => $vo->getMatricula(),
        //     ":id" => $vo->getId()
        // ];

        // return $db->execute($query, $binds);
    }

    public function delete($vo)
    {
        // $db = new Database();
        // $query = "DELETE FROM alunos WHERE id = :id";
        // $binds = [":id" => $vo->getId()];

        // return $db->execute($query, $binds);
    }
}
