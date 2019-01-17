<?php
    if(!empty($_POST['data'])) {
        $data = $_POST['data'];
        $fname = mktime() . ".txt";//generates random name

        $file = fopen("./test" .$fname, 'w');//creates new file
        fwrite($file, $data);
        fclose($file);
        echo "POST RECEIVED"
    }
    echo "POST NOT RECEIVED"
?>