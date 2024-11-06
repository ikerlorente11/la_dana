function loadEntries() {
    $.ajax({
        url: '../php/get_entries.php',
        type: 'GET',
        success: function(data) {
            $('#entries').empty();
            data.forEach(entry => {
                $('#entries').append(createEntry(entry));
            });
        },
        error: function(error) {
            console.error('Error al obtener las entradas:', error.responseText);
        }
    });
}

function createEntry(data){
    const entryWidth = 300;
    const entryHeight = 200;
    const randomLeft = Math.random() * (window.innerWidth - entryWidth);
    const randomTop = Math.random() * (window.innerHeight - entryHeight);

    let entry = document.createElement("div");
    entry.classList.add("entry");
    entry.setAttribute("value", data.id);
    entry.setAttribute("draggable", true);
    entry.style.width = entryWidth + 'px';
    entry.style.height = entryHeight + 'px';
    entry.style.left = randomLeft + 'px';
    entry.style.top = randomTop + 'px';

    let title = document.createElement("h2");
    title.textContent = data.title;

    let author = document.createElement("p");
    author.textContent = data.author;

    let mail = document.createElement("p");
    mail.textContent = data.mail;

    entry.appendChild(title);
    entry.appendChild(author);
    entry.appendChild(mail);

    entry.addEventListener("click", () => {
        $.ajax({
            url: '../php/get_entry.php',
            type: 'POST',
            data: {id: data.id},
            success: function(response) {
                $('#entryFull').removeClass('d-none');
                $('#entryFull .title').text(response.title);
                $('#entryFull .description').text(response.description);
                $('#entryFull .author').text(response.author);
                $('#entryFull .mail').text(response.mail);
            },
            error: function(error) {
                console.error('Error al añadir la entrada:', error.responseText);
                console.log('Error al añadir la entrada');
            }
        });
    });

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
        }, { once: true });
    });

    return entry;
}


function toggleForm(){
    $('#newEntryForm').toggleClass('d-none');
}

function hideEntries(){
    $('#entryFull').addClass('d-none');
}

$(document).ready(function() {
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

                $('#entries').append(createEntry(newEntry));
            },
            error: function(error) {
                console.error('Error al añadir la entrada:', error.responseText);
                console.log('Error al añadir la entrada');
            }
        });
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