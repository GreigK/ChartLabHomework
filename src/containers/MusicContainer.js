import React, { useState, useEffect } from 'react';
import ChartList from "../components/ChartList";

const MusicContainer = () => {

    const [musics, setMusic] = useState([])

    useEffect(() => {
        getMusic();
      }, [])



    const getMusic = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(music => setMusic(music.feed.entry))
    }



    return(
        <div>
            <ChartList musics={musics}/>
        </div>
    )
}


export default MusicContainer;