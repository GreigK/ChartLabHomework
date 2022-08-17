import React from "react";

const Song = ({position, title, artist, image, audio}) => {

    return (
        <li>
            <h3>{position}</h3>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{image}</p>
            <p>{audio}</p>
        </li>
    )
}

export default Song;