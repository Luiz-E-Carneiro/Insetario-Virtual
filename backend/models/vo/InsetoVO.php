<?php

namespace Model\VO;

final class InsetoVO extends VO
{
    public $nome_cientifico;
    public $id_ordem;
    public $id_familia;
    public $predador;
    public $importancia;
    public $morfologia;
    public $nomes_comuns = [];
    public $nome_familia;
    public $nome_ordem;
    public $nomes_culturas = [];

    public function __construct(
        $id = 0,
        array $nomes_comuns = [],
        $nome_cientifico = "",
        $id_ordem = 0,
        $id_familia = 0,
        $predador = "",
        $importancia = "",
        $morfologia = "",
        $nome_familia = "",
        $nome_ordem = "",
        array $nomes_culturas = []
    ) {
        parent::__construct($id);
        $this->nomes_comuns = $nomes_comuns;
        $this->nome_cientifico = $nome_cientifico;
        $this->id_ordem = $id_ordem;
        $this->id_familia = $id_familia;
        $this->predador = $predador;
        $this->importancia = $importancia;
        $this->morfologia = $morfologia;
        $this->nome_familia = $nome_familia;
        $this->nome_ordem = $nome_ordem;
        $this->nomes_culturas = $nomes_culturas;
    }

    public function getNomesComuns()
    {
        return $this->nomes_comuns;
    }

    public function setNomesComuns(array $nomes_comuns)
    {
        $this->nomes_comuns = $nomes_comuns;
    }

    public function addNomeComum($nome)
    {
        $this->nomes_comuns[] = $nome;
    }

    public function getNomeCientifico()
    {
        return $this->nome_cientifico;
    }

    public function setNomeCientifico($nome_cientifico)
    {
        $this->nome_cientifico = $nome_cientifico;
    }

    public function getIdOrdem()
    {
        return $this->id_ordem;
    }

    public function setIdOrdem($id_ordem)
    {
        $this->id_ordem = $id_ordem;
    }

    public function getIdFamilia()
    {
        return $this->id_familia;
    }

    public function setIdFamilia($id_familia)
    {
        $this->id_familia = $id_familia;
    }

    public function getPredador()
    {
        return $this->predador;
    }

    public function setPredador($predador)
    {
        $this->predador = $predador;
    }

    public function getImportancia()
    {
        return $this->importancia;
    }

    public function setImportancia($importancia)
    {
        $this->importancia = $importancia;
    }

    public function getMorfologia()
    {
        return $this->morfologia;
    }

    public function setMorfologia($morfologia)
    {
        $this->morfologia = $morfologia;
    }

    public function getNomeFamilia()
    {
        return $this->nome_familia;
    }

    public function setNomeFamilia($nome_familia)
    {
        $this->nome_familia = $nome_familia;
    }

    public function getNomeOrdem()
    {
        return $this->nome_ordem;
    }

    public function setNomeOrdem($nome_ordem)
    {
        $this->nome_ordem = $nome_ordem;
    }

    public function getNomesCulturas()
    {
        return $this->nomes_culturas;
    }

    public function setNomesCulturas(array $nomes_culturas)
    {
        $this->nomes_culturas = $nomes_culturas;
    }

    public function addNomeCultura($nome_cultura)
    {
        $this->nomes_culturas[] = $nome_cultura;
    }
}
