import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbums } from "./actions";
import './Albums.css'


export function Albums() {
  const params = useParams();
  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(params.artist));
  }, [dispatch]);
  
  return (
    <div className="roster-container">
    <div className="team-logo">
      <img src={`/images/teams/${params.artist}.png`} alt="logo" />
    </div>

    {albums.map(album =>  <div class="player card">
        <div class = "pic">
        <img src={`/images/players/${album.pointguard}.png`} alt="logo" />
        </div>
        <div class="info">
          <div class="name">{album.pointguard}</div>
          <div class="position"> Point Guard</div>
          <div class ="team" >{params.artist}</div>
          <div class ="logo">  <img src={`/images/teams/${params.artist}.png`} alt="logo" /> </div>
        </div>
      </div>
      )}


{albums.map(album =>  <div class="player card">
        <div class = "pic">
        <img src={`/images/players/${album.shootinguard}.png`} alt="logo" />
        </div>
        <div class="info">
          <div class="name">{album.shootinguard}</div>
          <div class="position"> Shooting Guard</div>
          <div class ="team" >{params.artist}</div>
          <div class ="logo">  <img src={`/images/teams/${params.artist}.png`} alt="logo" /> </div>
        </div>
      </div>
      )}


{albums.map(album =>  <div class="player card">
        <div class = "pic">
        <img src={`/images/players/${album.smallforward}.png`} alt="logo" />
        </div>
        <div class="info">
          <div class="name">{album.smallforward}</div>
          <div class="position"> Small Forward</div>
          <div class ="team" >{params.artist}</div>
          <div class ="logo">  <img src={`/images/teams/${params.artist}.png`} alt="logo" /> </div>
        </div>
      </div>
      )}

{albums.map(album =>  <div class="player card">
        <div class = "pic">
        <img src={`/images/players/${album.powerforward}.png`} alt="logo" />
        </div>
        <div class="info">
          <div class="name">{album.powerforward}</div>
          <div class="position"> powerforward</div>
          <div class ="team" >{params.artist}</div>
          <div class ="logo">  <img src={`/images/teams/${params.artist}.png`} alt="logo" /> </div>
        </div>
      </div>
      )}

{albums.map(album =>  <div class="player card">
        <div class = "pic">
        <img src={`/images/players/${album.center}.png`} alt="logo" />
        </div>
        <div class="info">
          <div class="name">{album.center}</div>
          <div class="position"> Shooting Guard</div>
          <div class ="team" >{params.artist}</div>
          <div class ="logo">  <img src={`/images/teams/${params.artist}.png`} alt="logo" /> </div>
        </div>
      </div>
      )}
    
  </div>
  );
}
