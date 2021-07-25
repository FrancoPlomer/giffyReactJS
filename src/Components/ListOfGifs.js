import React, {useState, useEffect} from 'react'
import GIF from './Componentes'
import getGifs from '../Services/getGifs'

export default function ListOfGifs({ params })
{
    const {keywords} = params 
    const [gifs, setGifs] = useState([])

    useEffect(function ()  {
        getGifs( {keywords} )
            .then(gifs => setGifs(gifs))
    }, [keywords])
    return gifs.map(({title, id, url}) => 
        <GIF 
        key={id}
        title={title} 
        id={id} 
        url={url}/>
    )
}