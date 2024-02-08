<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    
    <Header>
        Bankas     
        <a href="./index.php">Pagrindinis puslapis</a>
        <a href="./nsaskaitoskurimas.php">Naujos sąskaitos kūrimas</a>
        <a href="./prisijungimas.php">Prisijungti</a>
        <a href="./atsijungti.php">Išeiti</a>
    </Header>

    <div>
        <?php
        $accounts = [
            ['name'=>'Jonas','surname'=>'Jonelis','as/k'=>'345446448445','sasknumeris'=>'LT123123120','likutis'=>100],
            ['name'=>'Petras','surname'=>'Petrelis','as/k'=>'375446448446','sasknumeris'=>'LT123123121','likutis'=>20],
            ['name'=>'Deimantė','surname'=>'Tomelienė','as/k'=>'445446448447','sasknumeris'=>'LT123123122','likutis'=>40],
            ['name'=>'Kietas','surname'=>'Kietuolis','as/k'=>'620446448411','sasknumeris'=>'LT123123123','likutis'=>140],
            ['name'=>'Ona','surname'=>'Tomelite','as/k'=>'620446448411','sasknumeris'=>'LT123123124','likutis'=>400],
            ['name'=>'Tomas','surname'=>'Tutruolis','as/k'=>'365446448448','sasknumeris'=>'LT123123125','likutis'=>440],
        ];
        foreach ($accounts as $user) : ?>
        <div>
            <h1><?= 'vardas: '. $user['name'] ?></h1>
            <h1><?= 'pavardė: '. $user['surname'] ?></h1>
            <h1><?= 'as/k: '. $user['as/k'] ?></h1>
            <h1><?= 'saskaitos nr.: '.$user['sasknumeris'] ?></h1>
            <h1><?= 'suma: $'.$user['likutis'] ?></h1>
            <button>Prideti lešas</button>
            <button>Nuskaičiuoti lešas</button>
            <button>Ištrinti sąskaitą</button>
        </div>
        <?php endforeach ?>
    </div>
</body>

</html>