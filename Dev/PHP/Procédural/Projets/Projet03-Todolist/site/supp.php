<?php
foreach ($_POST['task'] as $value) {
    $file = fopen('doc.csv','a+');

echo in_array($_POST['task'], $task);
echo $value;
   $_POST['task'] = [];
   
    fclose($file);

    echo "Supprimé";
}
?>