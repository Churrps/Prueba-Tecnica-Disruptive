import { useParams } from "react-router-dom"
import { useContext } from 'react'
import Context from '../components/context'

export default function TopicBrowse() {
    const userData = useContext(Context)
    const params = useParams()
    let topicData = null

    switch (params.id) {
        case "VideoJuegos":
            topicData = {
                name: 'Video Juegos',
                about: 'Pokemon Violeta',
                image: require('../images/pokemon-Violeta.png')
            }
            break
        
        case "Gastronomia":
            topicData = {
                name: 'Comida',
                about: "Tacos",
                image: require('../images/tacos.png')
            }
            break
        
        default:
            break
    }

    return (
        <>
            <h1 className="white">Tema Buscado</h1>
            {
                topicData != null ?
                <>
                    <img src={topicData.image} alt={topicData.name} width="400" />
                    <h2 className="white">{topicData.name} - {topicData.about}</h2>
                </>
                : ''
            }
        </>
    )
}