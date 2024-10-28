<?php

namespace Model\VO;

final class FormVO extends VO
{
    public $ordens = [];
    public $familias = [];
    public $culturas = [];

    public function __construct(
        $id = 0, array $ordens = [], array $familias = [], array $culturas = []
    ) {
        parent::__construct($id);
        $this->ordens = $ordens;
        $this->familias = $familias;
        $this->culturas = $culturas;
    }
    
    public function getOrdens(){
        return $this->ordens;
    }
    public function setOrdens($ordens){
        $this->ordens = $ordens;
    }
    public function getFamilias(){
        return $this->familias;
    }
    public function setFamilias($familias){
        $this->familias = $familias;
    }
    public function getCulturas(){
        return $this->culturas;
    }
    public function setCulturas($culturas){
        $this->culturas = $culturas;
    }
}
