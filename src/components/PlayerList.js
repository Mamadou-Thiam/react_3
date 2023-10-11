import React from 'react';
import  {player}  from './Joueur';
import Player from './player/Player';
const PlayerList = () => {
    return (
    <>
 <div className='play'>
 {
        player.map((play)=>(
            <Player {...play}/>
        ))
    }
 </div>
    </>
    );
};

export default PlayerList;