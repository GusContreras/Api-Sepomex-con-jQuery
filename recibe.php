<?php

  if($_POST==null){
    header("Location: index.html");
    exit();
  }

  function ValDato($dato){
  	$dato = trim($dato);        
  	$dato = strip_tags($dato);
  	return $dato;
  }

  if(isset($_POST['estado'])){
    $estado = ValDato($_POST['estado']);   
  }

  if(isset($_POST['municipio'])){
    $municipio = ValDato($_POST['municipio']);   
  }

  if(isset($_POST['colonia'])){
    $colonia = ValDato($_POST['colonia']);   
  }

  if(isset($_POST['cp'])){
    $cp = ValDato($_POST['cp']);   
  }
    
  echo "Estado: ". $estado . "\n Municipio: " . $municipio . "\n Colonia: " . $colonia . "\n Cp: " . $cp;
?>