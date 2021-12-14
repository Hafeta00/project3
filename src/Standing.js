import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchStanding } from "./actions";

export function Standing() {

    const params = useParams();
    const standing = useSelector((state) => state.standing);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchStanding);
    }, [dispatch]);

    return (

        <div>

        <h1> League Standings</h1>

        {standing.map((standing) => (
        <div>
          <table class="container">
            <tbody>
              <tr>
                <td>{standing.id}</td>
                <td>{standing.teamname}</td>
                <td>{standing.wins}</td>
                <td>{standing.losses}</td>
                <td>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}




        </div>



    );



}