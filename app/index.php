<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>La Dana Relatos</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="js/controller.js" defer></script>
    <link rel="stylesheet" href="styles/style.css">

    <link rel="icon" type="image/x-icon" href="/assets/favicon.png">
</head>
<body>
    <div id="notification">URL copiada al portapapeles</div>
    <a id="title" href="/">La Dana Relatos</a>
    <h1 id="slogan">Hagamos de esto vuestra historia</h1>

    <div class="machineContainer">
        <div id="ticketMachine">
            <h1>La Dana</h1>
            <h3>Recoge una historia</h3>
        </div>
    </div>

    <div id="entries">
        
    </div>

    <div id="entryFull" class="entryFull d-none">
        <i id="entryClose" class="fa-solid fa-x shareClose"></i>
        <div class="container">
            <h2 class="title"></h2>
            <p class="description"></p>
            <div class="footer">
                <p class="authorLocation"></p>
                <a id="entryFullShare" class="shareBtn">Compartir -></a>
            </div>
        </div>
    </div>

    <div id="shareContainer" class="d-none">
        <div id="share">
            <div class="closeContainer"><i id="shareClose" class="fa-solid fa-x shareClose"></i></div>
            <p>Comparte este relato y ayúdanos a hacer visible lo que muchos han vivido. Juntos podemos dar voz a estas historias de lucha</p>
            <div class="shareBtns">
                <a id="tiktok" href="" target="_blank">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
                <a id="twitter" href="" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a id="instagram" href="" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a id="facebook" href="" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a id="whatsapp" href="" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>

    <div id="footer">
        <a id="addEntryBtn" href="new.php">
            Escribir relato
            <i id="btnShowForm" class="fa-solid fa-plus btnShowForm"></i>
        </a>
        <div id="moreBtn">Ver más relatos</div>
        <a id="infoBtn" href="info.php">
            Info
        </a>
    </div>
</body>
</html>
