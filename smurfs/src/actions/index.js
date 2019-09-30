import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        });
}; 

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: GET_SMURFS_START });
    axios.post('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        });
}