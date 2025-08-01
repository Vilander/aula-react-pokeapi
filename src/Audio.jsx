import React from 'react'
import './Audio.css'

function Audio () {
    return (
        <>
            <audio controls loop>
                <source src="src/assets/bg-tema.mp3" type="audio/mpeg"/>
            </audio>
        </>
    )
}

export default Audio