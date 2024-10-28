<?php

namespace Model\VO;

final class OrdemVO extends VO
{
    private $ordem_nome;
    private $familias = [];

    public function __construct($id = 0, $ordem_nome = '', array $familias = [])
    {
        parent::__construct($id);
        $this->ordem_nome = $ordem_nome;
        $this->familias = $familias;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getOrdemNome()
    {
        return $this->ordem_nome;
    }

    public function setOrdemNome($ordem_nome)
    {
        $this->ordem_nome = $ordem_nome;
    }

    public function getFamilias()
    {
        return $this->familias;
    }

    public function setFamilias(array $familias)
    {
        $this->familias = $familias;
    }
}
