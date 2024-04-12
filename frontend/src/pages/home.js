export default function Home() {
    return (
        <>
            <h1 className="white">Categorias</h1>
            <ul className="productBox">
                <li>
                    <a href="/topic/VideoJuegos" className="topicLink"><img className="topicImage" src={require('../images/videogame.png')} alt="Tema - VideoJuegos"/></a>
                    <br /><a href="/topic/VideoJuegos" className="topicLink">Tema - VideoJuegos</a>
                </li>
                <li>
                    <a href="/topic/Gastronomia" className="topicLink"><img className="topicImage" src={require('../images/gastronomia2.png')} alt="Tema - Comida"/></a>
                    <br /><a href="/topic/Gastronomia" className="topicLink">Tema - Comida</a>
                </li>
            </ul>
        </>
    )
}