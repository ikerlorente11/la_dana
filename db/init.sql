CREATE TABLE IF NOT EXISTS entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    mail VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    entries (
        author,
        mail,
        title,
        description
    )
VALUES (
        NULL,
        NULL,
        'Primer entrada',
        'Descripción de la primera entrada'
    ),
    (
        'Anonimo',
        NULL,
        'Segunda entrada',
        'Descripción de la segunda entrada'
    );