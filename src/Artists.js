
import { Link } from "react-router-dom";
import './Artists.css'

export function Artists() {

  const re = {
    teams: [
        "sixers", "blazers", "bucks", "bulls", "cavaliers",
        "celtics", "clippers", "grizzlies", "hawks", "heat",
        "hornets", "jazz", "kings", "knicks", "lakers",
        "magic", "mavericks", "nets", "nuggets", "pacers",
        "pelicans", "pistons", "raptors", "rockets", "spurs",
        "suns", "thunder", "timberwolves", "warriors", "wizards"
       ],

       
}
  return (

    <div className = "main-container"> 
    <div className = "teams-container">
        {
            Object.values(re.teams).map(team => <Link to={`/roster/${team}`}>
              <div className="team hvr-underline-from-center hvr-grow-shadow">
          <img src={`/images/teams/${team}.png`} alt={team} />
          </div>
                
                </Link> )
        }
        
    </div>
    </div>
)

}
