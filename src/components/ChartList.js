import React from "react";
import Song from "./Song";

const ChartList = ({musics}) => {

    const musicNodes = musics.map((music, index) => {
        return(
            <Song 
                position={index+1}
                title={music['im:name'].label}
                artist={music['im:artist'].label}
                song={music['im:artist'].label}
                image={music['im:image'][2].label}
                audio={music.link[1].attributes.href}
                />
        )
    })
    return (
        <ul>
            {musicNodes}
        </ul>
    )
}

export default ChartList;