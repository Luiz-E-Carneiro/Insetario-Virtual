<?php

namespace Controller;

use Model\InsetoModel;
use Model\VO\InsetoVO;

final class InsetoController extends Controller
{
    public function list()
    {
        $model = new InsetoModel();
        $data = $model->selectAll(new InsetoVO());

        return $data;
    }

    public function detail()
    {
        $id = $_GET["id"];

        $model = new InsetoModel();
        $vo = new InsetoVO($id);
        $Inseto = $model->selectOne($vo);

        return $Inseto;
    }

    public function form()
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
