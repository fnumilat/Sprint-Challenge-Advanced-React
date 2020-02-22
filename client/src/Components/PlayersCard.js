import React from "react";
import '../App.css';

const PlayersCard = (props) => {
    console.log(props);
return (
    <div className="PlayersCard-Div">
        <div>
            {props.players.map(player => {
                return(
                    <div className="PlayerCard-Div">
                        <h1 className="PlayerCard-H1">Name: {player.name}</h1>
                        <h2 className="PlayerCard-H2">Country: {player.country}</h2>
                        <h2 className="PlayerCard-H2">Searches: {player.searches}</h2>
                    </div>
                )
            })}
        </div>
    </div>

)
};

export default PlayersCard;