CREATE TABLE IF NOT EXISTS entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    location VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    font INT NOT NULL,
    style INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    entries (
        author,
        location,
        title,
        description,
        font,
        style
    )
VALUES (
        'Alice Smith',
        'New York',
        'Exploring New York',
        'A brief story about the adventures in New York.',
        1,
        7
    ),
    (
        'John Doe',
        'London',
        'A Day in London',
        'Experiencing the beautiful sights of London.',
        3,
        5
    ),
    (
        'Emma Johnson',
        'Paris',
        'Paris Lights',
        'A romantic evening under the Paris lights.',
        2,
        8
    ),
    (
        'Robert Brown',
        'Berlin',
        'Berlin Journey',
        'Discovering the vibrant culture of Berlin.',
        4,
        10
    ),
    (
        'Lucy Davis',
        'Tokyo',
        'Tokyo Nightlife',
        'An exciting night exploring Tokyo\'s nightlife.',
        5,
        11
    ),
    (
        'Michael Miller',
        'Rome',
        'Roman Architecture',
        'An insight into the ancient architecture of Rome.',
        3,
        9
    ),
    (
        'Sophia Garcia',
        'Madrid',
        'Madrid Magic',
        'The beautiful and historic city of Madrid.',
        2,
        4
    ),
    (
        'David Martinez',
        'Lisbon',
        'Lisbon Love',
        'Exploring the charm of Lisbon.',
        1,
        6
    ),
    (
        'James Anderson',
        'Amsterdam',
        'Amsterdam Canals',
        'A day spent cruising through the canals.',
        4,
        8
    ),
    (
        'Mia Wilson',
        'Dubai',
        'Dubai Skyline',
        'The towering skyscrapers of Dubai.',
        5,
        3
    ),
    (
        'Ethan Thomas',
        'Istanbul',
        'Mystical Istanbul',
        'The rich history and culture of Istanbul.',
        1,
        12
    ),
    (
        'Ava White',
        'Barcelona',
        'Barcelona Beaches',
        'A relaxing day at Barcelona\'s beaches.',
        2,
        7
    ),
    (
        'Daniel Harris',
        'Prague',
        'Prague Charm',
        'The enchanting streets of Prague.',
        3,
        11
    ),
    (
        'Olivia Martin',
        'Vienna',
        'Vienna\'s Music',
        'The classical music heritage of Vienna.',
        1,
        9
    ),
    (
        'Liam King',
        'Dublin',
        'Irish Tales',
        'Stories from the heart of Ireland.',
        4,
        6
    ),
    (
        'Charlotte Lee',
        'Helsinki',
        'Winter in Helsinki',
        'Snowy landscapes and warm drinks in Helsinki.',
        5,
        10
    ),
    (
        'Noah Walker',
        'Copenhagen',
        'Copenhagen Biking',
        'Exploring the city on two wheels.',
        2,
        4
    ),
    (
        'Isabella Hall',
        'Stockholm',
        'Swedish Style',
        'A day in the life of Stockholm.',
        3,
        8
    ),
    (
        'William Scott',
        'Seoul',
        'Seoul\'s Street Food',
        'A culinary journey through Seoul.',
        5,
        5
    ),
    (
        'Mason Adams',
        'Beijing',
        'Historical Beijing',
        'Exploring the Great Wall and Forbidden City.',
        1,
        7
    ),
    (
        'Luna Moore',
        'Mumbai',
        'Mumbai Spice',
        'The vibrant spices and markets of Mumbai.',
        4,
        6
    ),
    (
        'Lucas Taylor',
        'Sydney',
        'Sydney Beaches',
        'A sunny day at Bondi Beach.',
        2,
        12
    ),
    (
        'Evelyn Jackson',
        'Cape Town',
        'Cape of Good Hope',
        'Discovering the natural beauty of Cape Town.',
        3,
        9
    ),
    (
        'Owen Hernandez',
        'Buenos Aires',
        'Buenos Aires Tango',
        'Feeling the rhythm of tango in Buenos Aires.',
        1,
        11
    ),
    (
        'Amelia Evans',
        'Los Angeles',
        'Hollywood Dream',
        'The glitz and glamour of Hollywood.',
        5,
        4
    ),
    (
        'Henry Collins',
        'Montreal',
        'Montreal Jazz',
        'Enjoying the Montreal Jazz Festival.',
        3,
        10
    ),
    (
        'Ella Thompson',
        'Vancouver',
        'Vancouver Outdoors',
        'Exploring the nature around Vancouver.',
        4,
        5
    ),
    (
        'Benjamin Carter',
        'Rio de Janeiro',
        'Rio Carnival',
        'Dancing through Rio\'s famous carnival.',
        1,
        8
    ),
    (
        'Sofia White',
        'Moscow',
        'Moscow\'s Architecture',
        'Admiring the historic buildings of Moscow.',
        5,
        6
    ),
    (
        'Jack Martinez',
        'Mexico City',
        'Mexico City Streets',
        'Wandering through the colorful streets.',
        2,
        7
    ),
    (
        'Scarlett Robinson',
        'Athens',
        'Ancient Athens',
        'Walking through the ruins of Athens.',
        4,
        3
    ),
    (
        'Aiden Clark',
        'Bangkok',
        'Bangkok Markets',
        'A sensory journey through Bangkok\'s markets.',
        1,
        9
    ),
    (
        'Chloe Ramirez',
        'Edinburgh',
        'Scottish Castles',
        'Visiting the castles in Edinburgh.',
        2,
        10
    ),
    (
        'Daniel Johnson',
        'Seville',
        'Flamenco Nights',
        'Experiencing flamenco in Seville.',
        3,
        12
    ),
    (
        'Victoria Reed',
        'Budapest',
        'Budapest Baths',
        'Relaxing in the thermal baths of Budapest.',
        5,
        6
    ),
    (
        'Julian Morris',
        'Oslo',
        'Oslo in Winter',
        'Witnessing the Northern Lights.',
        4,
        8
    ),
    (
        'Grace Scott',
        'Zurich',
        'Swiss Alps',
        'Skiing in the Swiss Alps.',
        2,
        11
    ),
    (
        'Gabriel Phillips',
        'Havana',
        'Havana\'s Charm',
        'Exploring the old streets of Havana.',
        1,
        7
    ),
    (
        'Victoria Turner',
        'Warsaw',
        'Warsaw\'s History',
        'Learning about Warsaw\'s past.',
        5,
        4
    );