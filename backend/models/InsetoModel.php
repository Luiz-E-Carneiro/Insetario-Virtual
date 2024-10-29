<?php

namespace Model;

use Model\VO\InsetoVO;

final class InsetoModel extends Model
{
    public function selectAll($vo)
    {
        $db = new Database();

        $query = "
            SELECT 
                i.id AS id_inseto, 
                i.nome_cientifico, 
                o.id AS id_ordem,
                o.nome_ordem, 
                f.id AS id_familia,
                f.nome_familia, 
                i.predador,
                GROUP_CONCAT(nc.nome_comum SEPARATOR ',') AS nomes_comuns,
                GROUP_CONCAT(ic.id_cultura SEPARATOR ',') AS ids_culturas  -- Inclui IDs das culturas
            FROM 
                insetos i
            LEFT JOIN 
                familia f ON i.id_familia = f.id
            LEFT JOIN 
                ordem o ON i.id_ordem = o.id
            LEFT JOIN 
                nomes_comuns nc ON i.id = nc.id_inseto
            LEFT JOIN 
                inseto_cultura ic ON i.id = ic.id_inseto  -- Join para pegar as culturas
            GROUP BY 
                i.id, i.nome_cientifico, o.id, o.nome_ordem, f.id, f.nome_familia
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

    public function insert($vo){}

    public function update($vo){}

    public function delete($vo){}
}
