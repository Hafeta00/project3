import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbums, fetchArtists, deletePlayer } from "./actions";
import "./Player.css";

export function Player(props) {
  const params = useParams();
  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <div>
      <h2>All Players</h2>

      {albums.map((album) => (
        <div>
          <table class="container">
            <tbody>
              <tr>
                <td>{album.firstName}</td>
                <td>{album.lastName}</td>
                <td>{album.position}</td>
                <td>{album.number}</td>
                <td>{album.team}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => dispatch(deletePlayer(album.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
