import React from 'react'
import './Card.css'

function Card(props) {
    const tipoClasse = props.info.tipo
    .normalize("NFD")                     
    .replace(/[\u0300-\u036f]/g, "")      
    .replace(/\//g, "-")                  
    .toLowerCase(); 

    return (
        <>
         <div className={`card ${tipoClasse}`}>
             <h2>{props.info.id}</h2>
             <h3>{props.info.nome}</h3>
             <h4>{props.info.tipo}</h4>
             <img src={props.info.foto} />
         </div>
        </>
    )
}

export default Card