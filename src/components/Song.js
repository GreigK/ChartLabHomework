import React from "react";
import './song.css';

const Song = ({position, title, artist, image, audio}) => {

    return (
        
        <li className="Single">
            <h3>{position}</h3>
            <p>{title}</p>
            <p>{artist}</p>
            <img src={image} alt="no idea what goes here"></img>
            <audio controls src={audio} type="audio/mpeg"></audio>
        </li>
        
    )
}

export default Song;