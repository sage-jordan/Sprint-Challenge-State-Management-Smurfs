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
    console.log(newSmurf);
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("ERROR POSTING");
            dispatch({ type: GET_SMURFS_FAILURE, payload: `${err.response.status} ${err.response.data}`});
        });
}

export const handleChangeAction = (name, value) => dispatch => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name: name, value: value } })
}