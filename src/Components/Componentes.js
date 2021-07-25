import React from 'react'
import '../App.css'

export default function GIF({title, id, url})
{
    return (
    <a href={`#${id}`} className="gifClick">
    <h4>id: {id}- {title}</h4>
    <img alt={title} src={url}/>
    </a>
    )
}