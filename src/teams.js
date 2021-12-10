import { Link } from "react-router-dom";
import React from "react"
// import { fetchTeam } from "./actions";
// import { useEffect } from "react";
// import { useDispatch } from "react";


export function Teams(props) {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     //const play = new Player(players);
    //     dispatch(fetchTeam());
    //   }, [dispatch]);


    const teams = {
        Lakers: [
          'Lakers', 
        ],
        Heat: [
            'Rockets'
        ],
        Nets: [
            'Nets'
        ],
        Hornets: [
            'Hornets'
        ],
    
      };
    return (
        <div>
            {
                Object.values(teams).map(team => <Link to={`/team/${team}`}>{team}</Link> )
            }
            
        </div>
    )

}




