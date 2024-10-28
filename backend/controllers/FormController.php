<?php

namespace Controller;

use Model\FormModel;
use Model\VO\FormVO;

final class FormController extends Controller
{

    public function getAllInformations()
    {
        $model = new FormModel();
        $data = $model->selectAll(new FormVO());

        return $data;
    }

}
