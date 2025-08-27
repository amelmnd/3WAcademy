<?php

include 'Time.class.php';

$time = new Time(14, 29, 44);


$time->showTime();
$hour = $time->getHour();
echo ' <br> '.$hour;
$minute = $time->getMinute();
echo ' <br> '.$minute;
$second = $time->getSecond();

echo ' <br> '.$second;



$time->setHour(12);

$hours = $time->getHour();

echo ' <br> '.$hours;
?>