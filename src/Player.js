
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom'
// import { fetchTeam } from "./actions";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

export function Player(props) {
   let players = useSelector(state => state.players);
    
    
    const params = useParams(); 
    const team = params.team;
    console.log(team);


     
    const result = players.filter(player => player.team === team);
    console.log(result);

    //filter call
  
    return (
      <div>
        <h2>{team}</h2>
       
        
        <table id="players"> 
          <tr>
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Number</th>
            <th>Current Team</th>
           
          </tr>
        </table>
        
        
          {Object.values(result).map(play => 

            <table id="players"> 
                    
                    <tbody>
                        <tr>
                          
                          <td>{play.firstName}</td>
                          <td>{play.lastName}</td>
                          <td>{play.position}</td>
                          <td>{play.age}</td>
                          <td>{play.number}</td>
                          <td>{play.team}</td>
                          
                        </tr>
                    </tbody>
                  </table> 
          
                    
                    
          )}

      </div>

        
        
    );
  }