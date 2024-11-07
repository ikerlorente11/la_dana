const entryWidth = 300;
const entryHeight = 200;
const machineWidth = 350;
const machineHeight = 350;
const entryRenderTopSpacing = 100;
const entryRenderHorizontalSpacing = 50;
const defaultEntryQuantity = 20;


let entries = [];
function loadEntries() {
    $.ajax({
        url: '../php/get_entries.php',
        type: 'GET',
        success: function(data) {
            entries = data;
            printEntry();
            printEntries(defaultEntryQuantity);
        },
        error: function(error) {
            console.error('Error al obtener las entradas:', error.responseText);
        }
    });
}

function printEntries(quantity){
    const position = $('#ticketMachine').offset();
    const machineLeft = position.left;
    const machineRight = position.left + machineWidth;
    const machine = {left: machineLeft, right: machineRight};

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
    let left = 0;
    let top = 0;

    if(random){
        left = Math.random() * (window.innerWidth - entryWidth);
        const right = left + entryWidth;

        if(right > machine.left - entryRenderHorizontalSpacing && left < machine.right + entryRenderHorizontalSpacing){
            top = Math.random() * (window.innerHeight - entryHeight - (machineHeight + entryRenderTopSpacing)) + (machineHeight + entryRenderTopSpacing);
        }else{
            top = Math.random() * (window.innerHeight - entryHeight);
        }
    }else{
        left = window.innerWidth / 2 - entryWidth / 2;
        top = machineHeight * .85;
    }

    let entry = document.createElement("div");
    entry.classList.add("entry");
    entry.setAttribute("value", data.id);
    entry.setAttribute("draggable", true);
    entry.style.width = entryWidth + 'px';
    entry.style.height = entryHeight + 'px';
    entry.style.left = left + 'px';
    entry.style.top = top + 'px';

    if(!random){
        entry.style.marginTop = '-' + entryHeight + 'px';
    }

    let title = document.createElement("h2");
    title.textContent = data.title;
    entry.appendChild(title);

    if(data.author){
        let author = document.createElement("p");
        author.textContent = data.author;
        entry.appendChild(author);
    }

    if(data.mail){
        let mail = document.createElement("p");
        mail.textContent = data.mail;
        entry.appendChild(mail);
    }

    entry.addEventListener("click", () => {
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
            $('#entryFull').removeClass('d-none');
            $('#entryFull .title').text(response.title);
            $('#entryFull .description').text(response.description);
            $('#entryFull .author').text(response.author);
            $('#entryFull .mail').text(response.mail);

            const url = encodeURIComponent(`${window.location.origin}${window.location.pathname}?id=${id}`);
            const text = encodeURIComponent("Mira esta página");

            const twitterLink = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            $('#twitter').attr('href', twitterLink);
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

$(document).ready(function() {
    $('#ticketMachine').width(machineWidth);  // Establece el ancho
    $('#ticketMachine').height(machineHeight);

    loadEntries();

    $('#entryForm').submit(function(event) {
        event.preventDefault();
        
        const newEntry = {
            author: $('#author').val(),
            mail: $('#mail').val(),
            title: $('#title').val(),
            description: $('#description').val()
        };

        $.ajax({
            url: '../php/add_entry.php',
            type: 'POST',
            data: newEntry,
            success: function(response) {
                console.log('Entrada añadida exitosamente');
                $('#entryForm')[0].reset();
                toggleForm();

                $('#entries').append(createEntry(newEntry, true));
            },
            error: function(error) {
                console.error('Error al añadir la entrada:', error.responseText);
                console.log('Error al añadir la entrada');
            }
        });
    });

    
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

    $('#btnShowForm').click(function(e) {
        $('#entryForm')[0].reset();
        toggleForm();
    });

    $('#entryFull').click(function(e) {
        hideEntries();
    });

    $('#entryFull .container').click(function(e) {
        e.stopPropagation();
    });
});