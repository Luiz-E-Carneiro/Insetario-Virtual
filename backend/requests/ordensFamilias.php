<?php

header("Access-Control-Allow-Origin: *");

require_once("./../config.php");
require_once("./../vendor/autoload.php");

$controller = new Controller\OrdemController();
$data = $controller->form();

die(json_encode($data));