const entryWidth = 414;
const entryHeight = 500;
const machineWidth = 350;
const machineHeight = 350;
const entryRenderTopSpacing = 100;
const topRenderSpacing = 160;
const entryRenderHorizontalSpacing = 50;
const defaultEntryQuantity = 20;
const enableMachine = false;

const url = `${window.location.origin}${window.location.pathname}`;
const text = "Mira esta página";
let completeUrl;
const instagramLink = `https://www.instagram.com/create/story`;
const facebookLink = `https://www.facebook.com/sharer/sharer.php`;

let fonts;
let styles;

let entries = [];
function loadEntries() {
    $.ajax({
        url: '../php/get_entries.php',
        type: 'GET',
        success: function(data) {
            entries = data;

            if(enableMachine){
                $('.machineContainer').css('display', 'flex');
                printEntry();
                printEntries(defaultEntryQuantity);
            }else{
                printEntries(entries.length);
            }
        },
        error: function(error) {
            console.error('Error al obtener las entradas:', error.responseText);
        }
    });
}

function printEntries(quantity){
    let machine = {left: 0, right: 0};
    if(enableMachine){
        const position = $('#ticketMachine').offset();
        const machineLeft = position.left;
        const machineRight = position.left + machineWidth;
        machine = {left: machineLeft, right: machineRight};
    }

    while(entries.length > 0 && quantity > 0) {
        const randomIndex = Math.floor(Math.random() * entries.length);
        const entry = entries.splice(randomIndex, 1)[0];

        $('#entries').append(createEntry(entry, true, machine));

        quantity--;
    }
}

function printEntry() {
    if(entries.length > 0){
        const randomIndex = Math.floor(Math.random() * entries.length);
        const entry = entries.splice(randomIndex, 1)[0];
    
        $('#entries').append(createEntry(entry, false));
    }
}

function createEntry(data, random, machine){
    let startX = 0;
    let startY = 0;
    const dragThreshold = 10;
    let left = 0;
    let top = 0;

    if(random){
        left = Math.random() * (window.innerWidth - entryWidth);
        const right = left + entryWidth;

        if(right > machine.left - entryRenderHorizontalSpacing && left < machine.right + entryRenderHorizontalSpacing){
            top = Math.random() * (window.innerHeight - topRenderSpacing - entryHeight - (machineHeight + entryRenderTopSpacing - topRenderSpacing)) + (machineHeight + entryRenderTopSpacing - topRenderSpacing);
        }else{
            top = Math.random() * (window.innerHeight - topRenderSpacing - entryHeight - topRenderSpacing) + topRenderSpacing;
        }
    }else{
        left = window.innerWidth / 2 - entryWidth / 2;
        top = machineHeight * .85;
    }

    const font = fonts.find(f => f.id == data.font);
    const style = styles.find(s => s.id == data.style);

    let entry = document.createElement("div");
    entry.classList.add("entry");
    entry.setAttribute("value", data.id);
    entry.setAttribute("draggable", true);
    entry.style.color = style.color;
    entry.style.width = entryWidth + 'px';
    entry.style.height = entryHeight + 'px';
    entry.style.left = left + 'px';
    entry.style.top = top + 'px';
    entry.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    if(style.background){
        entry.style.backgroundImage = `url('assets/backgrounds/${style.backgroundValue}')`;
        entry.style.backgroundSize = "cover";
        entry.style.backgroundPosition = "center";
        entry.style.backgroundRepeat = "no-repeat";
    }else{
        entry.style.backgroundColor = style.backgroundValue;
    }

    if(!random){
        entry.style.marginTop = '-' + entryHeight + 'px';
    }

    let title = document.createElement("h2");
    title.textContent = data.title;
    title.style.fontFamily = font.name;
    title.style.fontStyle = font.style;
    title.style.fontWeight = font.weight;
    title.style.lineHeight = `${font.lineHeight}px`;
    title.style.fontSize = `${font.size}px`;
    entry.appendChild(title);

    let person = "";

    if(data.author){
        person += data.author;
    }

    if(data.location){
        if(person == ""){
            person += data.location;
        }else{
            person += ', ' + data.location;
        }
    }

    let footer = document.createElement("div");

    if(person != ""){
        let authorLocation = document.createElement("p");
        authorLocation.textContent = person;
        footer.appendChild(authorLocation);
    }

    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}?id=${data.id}`;
    completeUrl = `${url}?id=${data.id}`;
    
    let share = document.createElement("a");
    share.textContent = "Compartir ->";
    share.classList.add('shareBtn');

    share.addEventListener("click", (e) => {
        $('#twitter').attr('href', twitterLink);
        $('#instagram').attr('href', instagramLink);
        $('#facebook').attr('href', facebookLink);

        copyToClipboard();

        e.stopPropagation();
        $('#shareContainer').removeClass('d-none');
    });

    footer.appendChild(share);

    entry.appendChild(footer);

    entry.addEventListener("click", (e) => {
        loadEntry(data.id)
    });

    if(random){
        entry.hasMoved = true;
    }else{
        entry.hasMoved = false;
    }

    entry.addEventListener('dragstart', (event) => {
        event.preventDefault();

        const clone = event.target.cloneNode(true);
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);

        event.target.style.opacity = '0';

        document.addEventListener('mousemove', (e) => {
            clone.style.left = `${e.pageX - event.layerX}px`;
            clone.style.top = `${e.pageY - event.layerY}px`;
        });

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', () => {});
            
            event.target.style.left = clone.style.left;
            event.target.style.top = clone.style.top;
            event.target.style.opacity = '1';

            document.body.removeChild(clone);

            if (!event.target.hasMoved) {
                printEntry();
                event.target.hasMoved = true;
            }
        }, { once: true });

    });

    entry.addEventListener("touchstart", (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
        const rect = entry.getBoundingClientRect();
        const relativeX = touch.pageX - rect.left - window.scrollX;
        const relativeY = touch.pageY - rect.top - window.scrollY;

        const clone = entry.cloneNode(true);
        clone.style.pointerEvents = 'none';
        document.body.appendChild(clone);

        entry.style.opacity = '0';

        document.addEventListener("touchmove", (e) => {
            const moveX = e.touches[0].pageX;
            const moveY = e.touches[0].pageY;

            // Solo activa el arrastre si el movimiento excede el umbral
            if (Math.abs(moveX - startX) > dragThreshold || Math.abs(moveY - startY) > dragThreshold) {
                clone.style.left = `${moveX - relativeX}px`;
                clone.style.top = `${moveY - relativeY}px`;
            }
        });

        document.addEventListener("touchend", (e) => {
            const moveX = e.changedTouches[0].pageX;
            const moveY = e.changedTouches[0].pageY;

            if (Math.abs(moveX - startX) > dragThreshold || Math.abs(moveY - startY) > dragThreshold) {
                document.removeEventListener('touchmove', () => {});
                
                entry.style.left = clone.style.left;
                entry.style.top = clone.style.top;
                entry.style.opacity = '1';

                document.body.removeChild(clone);

                if (!entry.hasMoved) {
                    printEntry();
                    entry.hasMoved = true;
                }
            }else{
                document.body.removeChild(clone);
                entry.style.opacity = '1';
                loadEntry(data.id)
            }
        }, { once: true });
    });

    if(!random){
        setTimeout(() => {
            entry.style.transition = "margin-top 1s ease-out";
            entry.style.marginTop = 0;
        }, 10);
    }

    return entry;
}

function loadEntry(id){
    $.ajax({
        url: '../php/get_entry.php',
        type: 'POST',
        data: {id: id},
        success: function(response) {
            const font = fonts.find(f => f.id == response.font);
            const style = styles.find(s => s.id == response.style);

            $("#entryFull").css("color", style.color);
            $("#entryFull .title").css("font-family", font.name);
            $("#entryFull .title").css("line-height", `${font.lineHeight}px`);
            $("#entryFull .title").css("font-weight", font.weight);
            $("#entryFull .title").css("font-size", `${font.size}px`);
            $("#entryFull .title").css("font-style", font.style);

            let container = document.querySelector("#entryFull .container");

            if(style.background){
                container.style.backgroundImage = `url('assets/backgrounds/${style.backgroundValue}')`;
                container.style.backgroundSize = "cover";
                container.style.backgroundPosition = "center";
                container.style.backgroundRepeat = "no-repeat";
            }else{
                container.style.backgroundColor = style.backgroundValue;
            }

            let person = "";

            if(response.author){
                person += response.author;
            }

            if(response.location){
                if(person == ""){
                    person += response.location;
                }else{
                    person += ', ' + response.location;
                }
            }

            $('#entryFull .title').text(response.title);
            $('#entryFull .description').text(response.description);
            $('#entryFull .authorLocation').text(person);
            
            $('#entryFull').removeClass('d-none');

            const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}?id=${response.id}`;
            completeUrl = `${url}?id=${response.id}`;

            $('#twitter').attr('href', twitterLink);
            $('#instagram').attr('href', instagramLink);
            $('#facebook').attr('href', facebookLink);
        },
        error: function(error) {
            console.error('Error al añadir la entrada:', error.responseText);
            console.log('Error al añadir la entrada');
        }
    });
}


function toggleForm(){
    $('#newEntryForm').toggleClass('d-none');
}

function hideEntries(){
    $('#entryFull').addClass('d-none');
}

async function getFonts(){
    fetch('js/fonts.json')
        .then(response => response.json())
        .then(data => {
            fonts = data.fonts;
        }).catch(
            error => console.error('Error al cargar el archivo JSON:', error)
        );
}

async function getStyles(){
    fetch('js/styles.json')
        .then(response => response.json())
        .then(data => {
            styles = data.styles;
        }).catch(
            error => console.error('Error al cargar el archivo JSON:', error)
        );
}

function copyToClipboard(){
    navigator.clipboard.writeText(completeUrl)
        .then(() => {
            const notification = document.getElementById('notification');
                notification.classList.add('show');

                setTimeout(() => {
                    notification.classList.remove('show');
                }, 1500);
        })
        .catch(err => {
            console.log('No se pudo copiar la URL' + err);
        });
}

$(document).ready(async function() {
    await getFonts();
    await getStyles();

    $('#ticketMachine').width(machineWidth);  // Establece el ancho
    $('#ticketMachine').height(machineHeight);

    setTimeout(() => {
        loadEntries();
    }, 100);
    
    const params = new URLSearchParams(window.location.search);
    if(params.get("id")){
        loadEntry(params.get("id"));
    }

    $('#nextEntryBtn').click(function() {
        printRandomEntry();
    });

    $('#btnClose').click(function(e) {
        e.preventDefault();
        $('#entryForm')[0].reset();
        toggleForm();
    });

    $('#entryFull').click(function(e) {
        hideEntries();
    });

    $('#entryFull .container').click(function(e) {
        e.stopPropagation();
    });

    $('#entryFullShare').click(function(e) {
        copyToClipboard();
        $('#shareContainer').removeClass('d-none');
    });

    $('#shareClose').click(function(e) {
        $('#shareContainer').addClass('d-none');
    });
});