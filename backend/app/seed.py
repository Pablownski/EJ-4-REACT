from app.database import SessionLocal
from app.models.item import Article


def seed():
    db = SessionLocal()
    if db.query(Article).count() > 0:
        db.close()
        return

    articles = [
        Article(
            title="Champions League 2024: Los favoritos al título",
            summary="Análisis de los equipos con más posibilidades de alzarse con la orejona esta temporada.",
            content="La UEFA Champions League 2024 promete ser una de las ediciones más competidas de los últimos años. Con Real Madrid buscando su decimoquinta copa, el Manchester City queriendo consolidar su dinastía y el Bayern Múnich siempre presente, la competencia nunca fue tan pareja.\n\nEl formato con 36 equipos en la fase de liga ha traído partidos de altísimo nivel desde la primera jornada. Equipos como el Arsenal, el Inter de Milán y el Atlético de Madrid también se postulan como serios candidatos.\n\nLos analistas coinciden en que Real Madrid, con Mbappé en sus filas, parte como gran favorito. Sin embargo, el fútbol europeo siempre guarda sorpresas, y cualquier equipo con regularidad puede alzarse con el trofeo más preciado del continente.",
            author="Ana García",
            category="Champions League",
            image_url="http://localhost:5173/madrid.jpg",
            tags="champions league,real madrid,manchester city,barcelona,europa",
        ),
        Article(
            title="La Premier League: La liga más competitiva del mundo",
            summary="Por qué la Premier League es considerada el campeonato de clubes más emocionante del planeta.",
            content="Con sus estadios llenos semana a semana, la intensidad única de cada partido y la paridad entre sus equipos, la Premier League ha logrado posicionarse como la liga más vista y seguida del mundo entero.\n\nEl dominio de los 'Big Six' —Manchester City, Arsenal, Liverpool, Chelsea, Manchester United y Tottenham— contrasta con la capacidad de equipos modestos de dar sorpresas memorables. La liga inglesa es la única en el mundo donde cualquier jornada puede deparar un resultado inesperado.\n\nEl nivel económico sin precedentes, con los derechos televisivos más altos del planeta, permite fichar a las estrellas más brillantes del fútbol mundial. Esta inversión se refleja en una calidad técnica y física que difícilmente se encuentra en otra liga.",
            author="Roberto Silva",
            category="Ligas",
            image_url="http://localhost:5173/manU.jpg",
            tags="premier league,manchester city,arsenal,liverpool,inglaterra",
        ),
        Article(
            title="Cristiano Ronaldo en Al-Nassr: Un capítulo inesperado del mejor jugador de la historia",
            summary="El impacto de la llegada de CR7 a Arabia Saudita y su influencia en el fútbol de esa región.",
            content="Cuando Cristiano Ronaldo firmó por Al-Nassr en enero de 2023, pocos imaginaban el impacto que tendría su llegada en el fútbol árabe. En pocos meses, las audiencias televisivas se dispararon, los patrocinios se multiplicaron y el interés global por la Saudi Pro League alcanzó cotas históricas.\n\nCon más de 50 goles en su primera temporada completa, Ronaldo demostró que a sus 39 años sigue siendo un depredador del área sin igual. Su profesionalidad, su régimen de entrenamiento y su mentalidad ganadora han contagiado a sus compañeros y a toda la liga.\n\nMás allá de los números, CR7 ha convertido la liga saudí en un destino atractivo para otras grandes figuras: Benzema, Neymar, Kanté y Firmino siguieron sus pasos, elevando el nivel competitivo de una competición que el mundo entero observa con creciente interés.",
            author="Pedro López",
            category="Jugadores",
            image_url="http://localhost:5173/goat.jpg",
            tags="cristiano ronaldo,al-nassr,arabia saudita,saudi pro league",
        ),
        Article(
            title="El Clásico: Más que un partido de fútbol",
            summary="Historia y significado del derby más famoso del mundo entre Real Madrid y Barcelona.",
            content="El Clásico entre Real Madrid y FC Barcelona trasciende los límites del deporte para convertirse en un fenómeno cultural, político y social que cautiva a cientos de millones de personas en todo el mundo.\n\nDesde el primer encuentro oficial en 1929, este partido ha sido escenario de las actuaciones más memorables de la historia del fútbol. Di Stéfano, Puskas, Cruyff, Ronaldinho, Messi y Ronaldo han protagonizado momentos que quedaron grabados en la retina de todos los aficionados.\n\nHoy, con Mbappé vistiendo la camiseta blanca y Lamine Yamal como nuevo genio del Barcelona, el Clásico vive una nueva era dorada. Las rivalidades, los goles, las polémicas y la pasión que genera este encuentro no tienen comparación en ningún otro deporte del planeta.",
            author="María Torres",
            category="Clásicos",
            image_url="http://localhost:5173/clasico.jpg",
            tags="real madrid,barcelona,clásico,la liga,españa",
        ),
        Article(
            title="Kylian Mbappé: El Kaiser del fútbol mundial",
            summary="El joven delantero francés consolida su posición como Kaiser en el REAL MADRID.",
            content="Con tan solo 26 años, Kylian Mbappé ya es uno de los mejores jugadores del mundo e influyentes a nivel de club, siendo el lider del equipo blanco. Su velocidad, su técnica y su capacidad goleadora lo han convertido en el jugador más cotizado y  del planeta fútbol.\n\nCampeón del mundo con Francia en Rusia 2018, Mbappé acumula más de 300 goles en su carrera profesional, una cifra asombrosa para su edad. Su fichaje por el Real Madrid en 2024 supuso el cierre de un capítulo soñado para millones de madridistas en todo el mundo.\n\nLos expertos coinciden: Mbappé está llamado a dominar el fútbol mundial durante la próxima década. Su rivalidad con Vinicius Jr. dentro del mismo equipo, lejos de ser un problema, ha creado una dupla atacante de pesadilla para cualquier defensa del planeta.",
            author="Juan Salguero",
            category="Jugadores",
            image_url="http://localhost:5173/KaiserKIKI.jpg",
            tags="KIKI,real madrid,Ester Exposito,francia,velocidad",
        ),
        Article(
            title="Copa del Mundo 2026: Todo lo que necesitas saber",
            summary="Información completa sobre el próximo Mundial que se celebrará en Estados Unidos, Canadá y México.",
            content="La Copa del Mundo 2026 será histórica por múltiples razones: será la primera edición en contar con 48 selecciones, se disputará en tres países distintos —Estados Unidos, Canadá y México— y promete convertirse en el evento deportivo más masivo jamás organizado.\n\nCon 16 sedes distribuidas a lo largo de Norteamérica y capacidad para millones de espectadores, el torneo busca superar todos los récords de asistencia y audiencia. Las ciudades sede incluyen Nueva York, Los Ángeles, Dallas, Miami, Ciudad de México, Guadalajara, Toronto y Vancouver, entre otras.\n\nArgentina llega como actual campeona del mundo, pero Brasil, Francia, España, Alemania e Inglaterra buscan arrebatarle el cetro. Para el fútbol latinoamericano, la sede compartida representa una oportunidad única de celebrar el deporte más popular del continente.",
            author="World Cup News",
            category="Mundial",
            image_url="http://localhost:5173/mundial.jpg",
            tags="mundial 2026,estados unidos,canada,mexico,48 equipos",
        ),
    ]

    db.add_all(articles)
    db.commit()
    db.close()
