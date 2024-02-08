<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <title>Create</title>
</head>
<body>

    <?php require __DIR__ . '/parts/nav.php' ?>
    <?php require __DIR__ . '/parts/msg.php' ?>
    <header> Prisijungimas </header>
    <form class="conteiners">        
            <label for="Ūgis">Ūgis (cm)</label>       
            <div class="input1">                
                <input type="number" id="Ūgis" min="0"  step="1.0" max="300"value="0">
            </div>
            
            <label for="Svoris">Svoris (kg)</label>
            <div class="input2">                
                <input type="number" id="Svoris" min="0"  step="0.10" max="500" value="0">
            </div>
        </form>    
        <div class = "buttons_conteiner">
            <button class="btn1" id="reset"> Ištrinti </button>
            <button class="btn2" id="calc"> Skaičiuoti </button>
        </div>                   
</body>
</html>