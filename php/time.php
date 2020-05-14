<?php

function extractDate($date) {
    $secondes = $date[seconds];
    $minutes = $date[minutes];
    $heures = $date[hours];
    $date = "Il est : ".$heures.":".$minutes.":".$secondes;

    $subarray = array("hours" => $heures, "minutes" => $minutes, "secondes" => $secondes);
    return array($date, $subarray);
}


$data = extractDate(getdate());
$json = json_encode($data);
print_r($json);



?>