<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>La Dana Relatos | Crea tu relato</title>
    <meta name="description" content="Crea tu relato para compartirlo con todo el mundo">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="js/new.js" defer></script>
    <link rel="stylesheet" href="styles/style.css">

    <link rel="icon" type="image/x-icon" href="/assets/favicon.png">
</head>
<body>
    <a id="title" href="/">La Dana Relatos</a>

    <div class="newContent">
        <div id="font" class="d-none">
            <h1>Selecciona una tipografía</h1>
            <div class="list"></div>
        </div>

        <div id="style" class="d-none">
            <h1>Selecciona un estilo de pagina</h1>
            <div class="list"></div>
        </div>

        <div id="page" class="d-none">
            <form action="">
                <input type="text" name="newTitle" id="newTitle" placeholder="Escribir titulo" require>
                <textarea name="newDescription" id="newDescription" placeholder="Cuéntanos tu historia" maxlength="65535" require></textarea>
                <input type="text" name="newAuthor" placeholder="Escribe tu nombre (Opcional)" id="newAuthor">
                <input type="text" name="newLocation" placeholder="Desde donde escribes (Opcional)" id="newLocation">
            </form>
        </div>
    </div>

    <div id="navBtns">
        <span id="prev"><---</span>
        <span id="next"><span class="text d-none">Publicar</span><span class="arrow">---></span></span>
    </div>
</body>
</html>
