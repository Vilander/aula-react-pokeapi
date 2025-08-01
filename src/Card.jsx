import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
         <div className='card'>
             <h2>{props.info.id}</h2>
             <h3>{props.info.nome}</h3>
             <h4>{props.info.tipo}</h4>
             <img src={props.info.foto} />
         </div>
        </>
    )
}

export default Card