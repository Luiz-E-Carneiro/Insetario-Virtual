<?php

header("Access-Control-Allow-Origin: *");

require_once("./../config.php");
require_once("./../vendor/autoload.php");

$controller = new Controller\FormController();
$data = $controller->getAllInformations();

die(json_encode($data));