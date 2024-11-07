<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Dana Relatos</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="js/controller.js" defer></script>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <!-- <h1>La Dana Relatos</h1>
    <button id="nextEntryBtn">Recoge relato</button> -->

    <div class="machineContainer">
        <div id="ticketMachine">
            <h1>La Dana</h1>
            <h3>Recoge una historia</h3>
        </div>
    </div>

    <div id="entries">
        
    </div>

    <div id="newEntryForm" class="newEntryForm d-none">
        <div>
            <h2>Añadir Nueva Entrada</h2>
            <form id="entryForm">
                <div class="line">
                    <label for="author">Autor:</label>
                    <input type="text" id="author" name="author">
                </div>
                <div class="line">
                    <label for="mail">Mail:</label>
                    <input type="mail" id="mail" name="mail">
                </div>
                <div class="line">
                    <label for="title">*Título:</label>
                    <input type="text" id="title" name="title" required>
                </div>
                <div class="line">
                    <label for="description">*Descripción:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <br>
                <div class="buttons">
                    <button type="submit">Añadir Entrada</button>
                    <button id="btnClose">Cerrar</button>
                </div>
            </form>
        </div>
    </div>

    <div id="entryFull" class="entryFull d-none">
        <div class="container">
            <h2 class="title"></h2>
            <p class="description"></p>
            <p class="author"></p>
            <p class="mail"></p>
            <div class="socialMediaLinks">
                <a id="twitter" href="https://twitter.com/intent/tweet?text=Mira%20esta%20página&url=http%3A%2F%2Flocalhost%3A8080%2F%3Fid%3D12" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </div>
        </div>
    </div>

    <i id="btnShowForm" class="fa-solid fa-plus btnShowForm"></i>
</body>
</html>
