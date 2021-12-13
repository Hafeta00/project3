import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbums, fetchArtists, fetchfAlbums } from "./actions";
import './Player.css'

export function Player(props) {
  const params = useParams();
  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);
  //filter call

  return (
    <div>
    
    <h2 className="sort">All Players</h2>

        
<table class = "container">
<thead>
  <tr>
    
  <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Number</th>
            <th>Current Team</th>

   
  </tr>
  </thead>
</table>

{albums.map((album) => (

<div>
<table class="container">

	<tbody>
		<tr>
    <td>{album.firstName}</td>
                          <td>{album.lastName}</td>
                          <td>{album.position}</td>
                          <td>{album.age}</td>
                          <td>{album.number}</td>
                          <td>{album.team}</td>
		</tr>

    </tbody>
</table>

</div>

))}

   
    </div>
  );
}
