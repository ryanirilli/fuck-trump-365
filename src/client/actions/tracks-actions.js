export function setIsLoadingTracks(isLoadingTracks) {
  return {
    type: 'SET_IS_LOADING_TRACKS',
    isLoadingTracks
  }
}

export function setTracks(tracks) {
  return {
    type: 'SET_TRACKS',
    tracks
  }
}

export function fetchTracks() {
  return dispatch => {
    dispatch(setIsLoadingTracks(true));
    fetch('/api/v1/get-tracks')
      .then(response => response.json())
      .then(json => {
        dispatch(setIsLoadingTracks(false));
        dispatch(setTracks(json));
      })
      .catch(err => {});
  }
}