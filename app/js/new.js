let selectedFont = null;
let selectedStyle = null;
let page = 0;

function showPage(){
    $('.newContent > div').addClass('d-none');
    const next = document.getElementById("next");

    switch(page){
        case 0:
            next.querySelector('.text').classList.add("d-none");
            next.querySelector('.arrow').classList.remove("d-none");

            if(selectedFont){
                addPagination(0,1)
            }else{
                addPagination(0,0)
            }
            $('#font').removeClass('d-none');
            break;
        case 1:
            next.querySelector('.text').classList.add("d-none");
            next.querySelector('.arrow').classList.remove("d-none");

            if(selectedStyle){
                addPagination(1,1)
            }else{
                addPagination(1,0)
            }
            $('#style').removeClass('d-none');
            break;
        case 2:
            next.querySelector('.text').classList.remove("d-none");
            next.querySelector('.arrow').classList.add("d-none");

            addPagination(1,0)
            $('#page').removeClass('d-none');
            break;
    }
}

function loadFonts(){
    fetch('js/fonts.json')
        .then(response => response.json())
        .then(data => {
            $("#font .list").empty();
            data.fonts.forEach(font => {
                $("#font .list").append(createFont(font));
            });
        }).catch(
            error => console.error('Error al cargar el archivo JSON:', error)
        );
}

function loadStyles(){
    fetch('js/styles.json')
        .then(response => response.json())
        .then(data => {
            $("#style .list").empty();
            data.styles.forEach(style => {
                $("#style .list").append(createStyle(style));
            });
        }).catch(
            error => console.error('Error al cargar el archivo JSON:', error)
        );
}

function loadPage(){
    $("#newTitle").css("color", selectedStyle.color);
    $("#newTitle").css("font-family", selectedFont.name);
    $("#newTitle").css("line-height", `${selectedFont.lineHeight}px`);
    $("#newTitle").css("font-weight", selectedFont.weight);
    $("#newTitle").css("font-size", `${selectedFont.size}px`);
    $("#newTitle").css("font-style", selectedFont.style);
    $("#newTitle").css("--custom-color", selectedStyle.color);
    $("#newDescription").css("color", selectedStyle.color);
    $("#newDescription").css("--custom-color", selectedStyle.color);
    $("#newAuthor").css("color", selectedStyle.color);
    $("#newAuthor").css("--custom-color", selectedStyle.color);
    $("#newLocation").css("color", selectedStyle.color);
    $("#newLocation").css("--custom-color", selectedStyle.color);

    let container = document.getElementById("page");

    if(selectedStyle.background){
        container.style.backgroundImage = `url('assets/backgrounds/${selectedStyle.backgroundValue}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        container.style.backgroundRepeat = "no-repeat";
    }else{
        container.style.backgroundColor = selectedStyle.backgroundValue;
    }
}

function createFont(font){
    let container = document.createElement("div");
    container.classList.add("font-type");
    container.setAttribute("value", font.id);

    let title = document.createElement("p");
    title.textContent = "Te echaré de menos...";
    title.style.fontFamily = font.name;
    title.style.fontStyle = font.style;
    title.style.fontWeight = font.weight;
    title.style.lineHeight = `${font.lineHeight}px`;
    title.style.fontSize = `${font.size}px`;

    container.appendChild(title);

    container.addEventListener("click", () => {
        $(".font-type").css("border", "none")
        $(".font-type").css("opacity", ".5")
        container.style.border = "1px solid #868686";
        container.style.opacity = "1";
        selectedFont = font;
        loadStyles();
        showPage();
    });

    return container;
}

function createStyle(style){
    let container = document.createElement("div");
    container.classList.add("style-type");
    container.setAttribute("value", style.id);
    container.style.color = style.color;

    if(style.background){
        container.style.backgroundImage = `url('assets/backgrounds/${style.backgroundValue}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        container.style.backgroundRepeat = "no-repeat";
    }else{
        container.style.backgroundColor = style.backgroundValue;
    }

    let title = document.createElement("p");
    title.textContent = "Te echaré de menos...";
    title.style.fontFamily = selectedFont.name;
    title.style.fontStyle = selectedFont.style;
    title.style.fontWeight = selectedFont.weight;
    title.style.lineHeight = `${selectedFont.lineHeight}px`;
    title.style.fontSize = `${selectedFont.size}px`;

    container.appendChild(title);

    container.addEventListener("click", () => {
        $(".style-type").css("border", "none")
        $(".style-type").css("opacity", ".5")
        container.style.border = "1px solid #868686";
        container.style.opacity = "1";
        selectedStyle = style;
        loadPage()
        showPage();
    });

    return container;
}

function addPagination(enablePrev, enableNext){
    const oldPrev = document.getElementById("prev");
    const oldNext = document.getElementById("next");

    const prev = oldPrev.cloneNode(true);
    const next = oldNext.cloneNode(true);

    oldPrev.parentNode.replaceChild(prev, oldPrev);
    oldNext.parentNode.replaceChild(next, oldNext);

    if(enablePrev){
        prev.addEventListener("click", () => {
            if(page > 0){
                page--;
            }
            showPage();
        });
    }else{
        prev.addEventListener("click", () => {
            window.location.href = '/';
        });
    }

    if(enableNext){
        next.style.opacity = 1;

        next.addEventListener("click", () => {
            if(page < 2){
                page++;
            }
            showPage();
        });
    }else{
        next.style.opacity = .3;
    }
}

function checkForm(){
    const title = document.getElementById("newTitle");
    const textarea = document.getElementById("newDescription");

    if(title.value != "" && textarea.value != ""){
        const author = document.getElementById("newAuthor");
        const location = document.getElementById("newLocation");

        const oldNext = document.getElementById("next");
        const next = oldNext.cloneNode(true);
        next.style.opacity = 1;
        oldNext.parentNode.replaceChild(next, oldNext);

        next.addEventListener("click", () => {
            console.log(title.value, textarea.value, author.value, location.value);
            const newEntry = {
                author: author.value,
                location: location.value,
                title: title.value,
                description: textarea.value,
                font: selectedFont.id,
                style: selectedStyle.id
            };

            $.ajax({
                url: '../php/add_entry.php',
                type: 'POST',
                data: newEntry,
                success: function(response) {
                    window.location.href = '/';
                },
                error: function(error) {
                    console.error('Error al añadir la entrada:', error.responseText);
                    console.log('Error al añadir la entrada');
                }
            });
        });
    }else{
        const oldNext = document.getElementById("next");
        const next = oldNext.cloneNode(true);
        next.style.opacity = .3;
        oldNext.parentNode.replaceChild(next, oldNext);
    }
}

$(document).ready(function() {
    loadFonts();
    showPage();

    document.getElementById("newTitle").addEventListener("input", () => {
        checkForm()
    });

    document.getElementById("newDescription").addEventListener("input", () => {
        checkForm()
    });
});