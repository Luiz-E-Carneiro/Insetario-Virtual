<?php

namespace Model;

use Model\VO\InsetoVO;

final class InsetoModel extends Model
{
    public function selectFilter($vo)
    {
        // $db = new Database();

        // // Criação da query base
        // $query = "
        //     SELECT 
        //         i.id, 
        //         i.nome_cientifico, 
        //         o.nome_ordem, 
        //         f.nome_familia, 
        //         GROUP_CONCAT(nc.nome_comum SEPARATOR ',') AS nomes_comuns
        //     FROM 
        //         insetos i
        //     LEFT JOIN 
        //         familia f ON i.id_familia = f.id
        //     LEFT JOIN 
        //         ordem o ON i.id_ordem = o.id
        //     LEFT JOIN 
        //         nomes_comuns nc ON i.id = nc.id_inseto
        //     WHERE 1=1"; // Para facilitar a adição de condições

        // $binds = [];

        // if (!empty($vo->nome_cientifico)) {
        //     $query .= " AND i.nome_cientifico LIKE ?";
        //     $binds[] = '%' . $vo->nome_cientifico . '%';
        // }

        // if (!empty($vo->familia)) {
        //     $query .= " AND f.id = ?";
        //     $binds[] = $vo->familia;
        // }

        // if (!empty($vo->ordem)) {
        //     $query .= " AND o.id = ?";
        //     $binds[] = $vo->ordem;
        // }

        // if (isset($vo->predador)) {
        //     $query .= " AND i.predador = ?";
        //     $binds[] = $vo->predador;
        // }

        // // Finaliza a query
        // $query .= " GROUP BY i.id, i.nome_cientifico, o.nome_ordem, f.nome_familia
        //             ORDER BY o.nome_ordem, f.nome_familia, i.nome_cientifico";

        // // Executa a query
        // $data = $db->select($query, $binds);

        // return $this->organizeData($data);
    }


    public function selectAll($vo)
    {
        $db = new Database();

        $query = "
            SELECT 
                i.id, 
                i.nome_cientifico, 
                o.nome_ordem, 
                f.nome_familia, 
                GROUP_CONCAT(nc.nome_comum SEPARATOR ',') AS nomes_comuns
            FROM 
                insetos i
            LEFT JOIN 
                familia f ON i.id_familia = f.id
            LEFT JOIN 
                ordem o ON i.id_ordem = o.id
            LEFT JOIN 
                nomes_comuns nc ON i.id = nc.id_inseto
            GROUP BY 
                i.id, i.nome_cientifico, o.nome_ordem, f.nome_familia
            ORDER BY 
                o.nome_ordem, f.nome_familia, i.nome_cientifico
            ";


        $data = $db->select($query);

        return $this->organizeData($data);
    }


    public function selectOne($vo)
    {
        $db = new Database();

        $query = "
        SELECT 
            i.id,
            i.nome_cientifico,
            i.predador,
            i.importancia,
            i.morfologia,
            GROUP_CONCAT(nc.nome_comum SEPARATOR ',') AS nomes_comuns,
            o.nome_ordem,
            f.nome_familia,
            c.nome_cultura
        FROM insetos i
        LEFT JOIN nomes_comuns nc ON i.id = nc.id_inseto
        LEFT JOIN familia f ON i.id_familia = f.id
        LEFT JOIN ordem o ON i.id_ordem = o.id
        LEFT JOIN inseto_cultura ic ON i.id = ic.id_inseto
        LEFT JOIN culturas c ON ic.id_cultura = c.id
        WHERE i.id = :id_inseto
        ";

        $binds = [':id_inseto' => $vo->getId()];
        $data = $db->select($query, $binds);
        if (count($data) > 0) {
            $inseto = new InsetoVO();
            $inseto->setId($data[0]['id']);
            $inseto->setNomeCientifico($data[0]['nome_cientifico']);

            $nomesComunsArray = explode(',', $data[0]['nomes_comuns']);
            $inseto->setNomesComuns($nomesComunsArray);

            $inseto->setPredador($data[0]['predador']);
            $inseto->setImportancia($data[0]['importancia']);
            $inseto->setMorfologia($data[0]['morfologia']);
            $inseto->setNomeOrdem($data[0]['nome_ordem']);
            $inseto->setNomeFamilia($data[0]['nome_familia']);

            $culturas = [];

            foreach ($data as $row) {
                if (!empty($row['nome_cultura'])) {
                    $culturas[] = $row['nome_cultura'];
                }
            }
            $inseto->setNomesCulturas(array_unique($culturas));

            return $inseto;
        }

        return null;
    }

    public function insert($vo)
    {
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
