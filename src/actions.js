export const Action = Object.freeze({
  LoadedArtists: "LoadedArtists",
  LoadedAlbums: "LoadedAlbums",
  RemovePlayer: 'RemovePlayer',
  LoadedStanding: 'LoadedStanding',
  StartedWaiting:"StartedWaiting",
  StoppedWaiting: "StoppedWaiting",
});

export function loadedArtists(artists) {
  return {type: Action.LoadedArtists, payload: artists};
}

export function loadedAlbums(albums) {
  return {type: Action.LoadedAlbums, payload: albums};
}

export function loadedStanding(standing) {
  return {type: Action.LoadedStanding, payload: standing};
}




export function showProgress() {
  return {type: Action.StartedWaiting};
}

export function hideProgress() {
  return {type: Action.StoppedWaiting};
}

function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

export function fetchArtists() {
  console.log('fetchArtists')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.hafet.me:8443/all`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(loadedAlbums(data.results));
            dispatch(hideProgress());
      });
  };
}


export function fetchStanding() {

  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project2.hafet.me:8443/standing`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(loadedStanding(data.results));
            dispatch(hideProgress());
      });
  };
}

export function fetchAlbums(artist) {
  console.log('fetchArtists')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://project.hafet.me:8443/roster/${artist}`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadedAlbums(data.results));
            dispatch(hideProgress());
      });
  };
}


export function deletePlayer(id) {
  return dispatch => {
    const options = {
      method: 'DELETE',
    };
    fetch(`https://project2.hafet.me:8443/players/${id}`, options)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          
          dispatch(removePlayer(id));
        }
      });
  };
}

export function removePlayer(id) {
  return {type: Action.RemovePlayer, payload: id};
}

