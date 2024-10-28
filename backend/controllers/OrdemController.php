<?php

namespace Controller;

use Model\InsetoModel;
use Model\OrdemModel;
use Model\VO\InsetoVO;
use Model\VO\OrdemVO;

final class OrdemController extends Controller
{

    public function list()
    {
        $model = new InsetoModel();
        $data = $model->selectAll(new InsetoVO());

        return $data;
    }

    public function form()
    {
        $model = new OrdemModel();

        return $model->formSelectAll(new OrdemVO());
    }

    public function admForm()
    {
        $id = $_GET["id"] ?? 0;

        if (!empty($id)) {
            $model = new InsetoModel();
            $vo = new InsetoVO($id);
            $Inseto = $model->selectOne($vo);
        } else {
            $Inseto = new InsetoVO();
        }

        return $Inseto;
    }

    public function save()
    {
        $id = $_POST["id"];
        $vo = new InsetoVO($id, $_POST["nome"], $_POST["matricula"]);
        $model = new InsetoModel();

        if (empty($id)) {
            $result = $model->insert($vo);
        } else {
            $result = $model->update($vo);
        }

        return true;
    }

    public function remove()
    {
        $vo = new InsetoVO($_GET["id"]);
        $model = new InsetoModel();

        $result = $model->delete($vo);

        return true;
    }
}
