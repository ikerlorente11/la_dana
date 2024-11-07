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
        'El río desbordado',
        'El río local se desbordó tras una intensa lluvia, inundando las zonas bajas de la ciudad.'
    ),
    (
        'Anonimo',
        NULL,
        'Inundación en el barrio',
        'Los vecinos del barrio enfrentaron graves daños por la inundación que arrasó sus casas y comercios.'
    ),
    (
        'Carlos López',
        'carlos@mail.com',
        'La tormenta que nunca terminó',
        'Durante una tormenta que duró más de 48 horas, el nivel del agua superó las expectativas, afectando miles de familias.'
    ),
    (
        'María García',
        'maria@mail.com',
        'Desbordamiento de ríos en la región',
        'El desbordamiento de varios ríos dejó a decenas de comunidades aisladas, provocando un caos generalizado.'
    ),
    (
        'Juan Pérez',
        NULL,
        'Noche de terror en el sur',
        'Una fuerte lluvia nocturna provocó una crecida del río, sorprendiendo a todos mientras dormían.'
    ),
    (
        'Sandra Martínez',
        'sandra@mail.com',
        'Evacuación urgente',
        'La alarma de evacuación fue emitida cuando el río alcanzó niveles peligrosos en las primeras horas de la mañana.'
    ),
    (
        'David Hernández',
        NULL,
        'Los daños de la última tormenta',
        'El paso de una tormenta tropical dejó severas inundaciones que afectaron a más de mil hogares.'
    ),
    (
        'Patricia Ramírez',
        'patricia@mail.com',
        'El colapso de la ciudad',
        'La ciudad no estaba preparada para la magnitud de la inundación que se desató inesperadamente.'
    ),
    (
        'Luis González',
        NULL,
        'Ríos de agua en la calle',
        'Las calles se convirtieron en ríos, con vehículos arrastrados por las aguas.'
    ),
    (
        'Raúl Torres',
        'raul@mail.com',
        'Rapiña en tiempos de inundación',
        'El caos de la inundación fue aprovechado por algunos para robar bienes de las casas afectadas.'
    ),
    (
        'Alba Martín',
        'alba@mail.com',
        'El rescate en helicóptero',
        'Durante la inundación, los equipos de rescate tuvieron que usar helicópteros para salvar a personas atrapadas en los techos.'
    ),
    (
        'Antonio Díaz',
        'antonio@mail.com',
        'El barrio bajo',
        'En los barrios más bajos, las aguas arrasaron con todo lo que encontraron a su paso.'
    ),
    (
        'Isabel Fernández',
        NULL,
        'Los recuerdos perdidos',
        'Las familias perdieron recuerdos irremplazables en el desastre causado por las lluvias.'
    ),
    (
        'José Luis González',
        'jose.luis@mail.com',
        'Una vida flotante',
        'Las personas se vieron obligadas a utilizar botes para trasladarse por las calles inundadas.'
    ),
    (
        'Laura Jiménez',
        'laura@mail.com',
        'El río nunca fue tan peligroso',
        'La fuerza del río dejó claro que la naturaleza puede ser impredecible y peligrosa.'
    ),
    (
        'Pedro Romero',
        'pedro@mail.com',
        'El refugio improvisado',
        'Las familias afectadas por la inundación tuvieron que refugiarse en escuelas y otros edificios públicos.'
    ),
    (
        'Carmen López',
        'carmen@mail.com',
        'Lluvias constantes',
        'Las lluvias constantes durante días provocaron que los ríos se desbordaran sin previo aviso.'
    ),
    (
        'José Martínez',
        'jose.martinez@mail.com',
        'La presa colapsó',
        'El colapso de la presa generó una ola de agua que arrasó con todo a su paso.'
    ),
    (
        'Ana Sánchez',
        'ana@mail.com',
        'Inundación en la zona rural',
        'Las zonas rurales fueron las más afectadas, ya que las infraestructuras de drenaje eran insuficientes.'
    ),
    (
        'Ricardo Pérez',
        'ricardo@mail.com',
        'Las aguas no cesaban',
        'La sensación de desesperación creció mientras las aguas continuaban subiendo sin freno.'
    ),
    (
        'Elena García',
        'elena@mail.com',
        'El rescate en medio de la tormenta',
        'Voluntarios valientes salieron a rescatar a las personas atrapadas en sus casas durante la tormenta.'
    ),
    (
        'Juan Carlos Díaz',
        'juan.carlos@mail.com',
        'Reflexión tras el desastre',
        'Tras la catástrofe, la comunidad reflexionó sobre la importancia de la prevención ante desastres naturales.'
    ),
    (
        'Marta Rodríguez',
        'marta@mail.com',
        'El regreso a casa',
        'Las personas regresaron a sus hogares para encontrar que todo lo que tenían había sido destruido por el agua.'
    ),
    (
        'José López',
        'jose.lopez@mail.com',
        'El muro que no resistió',
        'Un muro de contención cedió por la presión del agua, causando la inundación de la ciudad.'
    ),
    (
        'Félix Hernández',
        'felix@mail.com',
        'Los evacuados',
        'Miles de personas fueron evacuadas de sus casas debido a las fuertes lluvias y la amenaza de inundación.'
    ),
    (
        'Cristina Díaz',
        'cristina@mail.com',
        'Vivir entre ruinas',
        'Las familias intentan reconstruir sus vidas mientras las ruinas de sus casas se sumergen en el lodo.'
    ),
    (
        'José Antonio Martínez',
        'jose.antonio@mail.com',
        'La sorpresa de la madrugada',
        'Una repentina crecida del río a mitad de la noche causó estragos en la ciudad.'
    ),
    (
        'Raquel Sánchez',
        'raquel@mail.com',
        'El agua sube rápidamente',
        'No hubo tiempo de reacción; el agua subió tan rápido que sorprendió a todos.'
    ),
    (
        'José Luis Ramírez',
        'jose.luis.ramirez@mail.com',
        'El puente colapsado',
        'El puente que conectaba dos regiones colapsó, dejando a miles de personas atrapadas en el otro lado.'
    ),
    (
        'Lucía Fernández',
        'lucia@mail.com',
        'Fuerza de la naturaleza',
        'Lo que parecía ser una tormenta común se convirtió en una de las peores inundaciones de la historia de la región.'
    ),
    (
        'Javier González',
        'javier@mail.com',
        'La llamada de auxilio',
        'Decenas de llamadas de auxilio fueron recibidas, pidiendo rescate a personas atrapadas en sus hogares.'
    ),
    (
        'Beatriz Pérez',
        'beatriz@mail.com',
        'Desesperación por la falta de agua potable',
        'Después de la inundación, la falta de agua potable se convirtió en un grave problema para los sobrevivientes.'
    ),
    (
        'Carlos Rodríguez',
        'carlos.rodriguez@mail.com',
        'La ciudad convertida en lago',
        'Las calles de la ciudad se convirtieron en un enorme lago, con el agua cubriendo todo a su paso.'
    ),
    (
        'Sandra López',
        'sandra.lopez@mail.com',
        'El final del desastre',
        'Con el paso de los días, las aguas finalmente comenzaron a bajar y las personas empezaron a evaluar los daños.'
    ),
    (
        'Eduardo Martínez',
        'eduardo@mail.com',
        'El primer rescate',
        'Un equipo de rescatistas fue el primero en llegar al área afectada, salvando vidas en condiciones extremas.'
    ),
    (
        'Cristina Pérez',
        'cristina.perez@mail.com',
        'La tierra se tragó todo',
        'El agua arrasó con casas, coches y cultivos; nada quedó intacto.'
    ),
    (
        'Pablo Sánchez',
        'pablo@mail.com',
        'Desbordamiento de alcantarillado',
        'El sistema de alcantarillado no resistió el volumen de agua, causando graves inundaciones en las calles principales.'
    ),
    (
        'Vanessa Torres',
        'vanessa@mail.com',
        'El milagro del rescate',
        'Un rescate milagroso se produjo cuando un equipo de bomberos logró salvar a una familia atrapada en un árbol.'
    ),
    (
        'Miguel Ramírez',
        'miguel@mail.com',
        'Las primeras lluvias',
        'Las primeras lluvias fueron la señal de que algo más grande estaba por llegar, pero nadie anticipó la magnitud del desastre.'
    ),
    (
        'Paula González',
        'paula@mail.com',
        'Inundación en la estación',
        'La estación de tren se inundó rápidamente, dejando varados a miles de viajeros durante horas.'
    ),
    (
        'Jorge Fernández',
        'jorge@mail.com',
        'La lucha contra el agua',
        'La comunidad se unió para colocar sacos de arena y detener el avance del agua, pero fue en vano.'
    ),
    (
        'Sofía López',
        'sofia@mail.com',
        'Inundación en las montañas',
        'Las fuertes lluvias también afectaron las zonas montañosas, provocando deslizamientos que bloquearon carreteras.'
    ),
    (
        'Alberto Sánchez',
        'alberto@mail.com',
        'Las aguas arrasaron',
        'La velocidad de la corriente fue tal que ningún vehículo pudo resistir el embate de las aguas.'
    ),
    (
        'Marta González',
        'marta.gonzalez@mail.com',
        'Rescate en balsa',
        'Los equipos de rescate tuvieron que usar balsas para salvar a las personas atrapadas en las zonas más altas de la ciudad.'
    );