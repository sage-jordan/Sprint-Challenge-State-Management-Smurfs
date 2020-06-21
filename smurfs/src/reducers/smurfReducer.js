import { GET_SMURFS_START, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS } from "../actions";

export const initialValue = {
    smurfs: [],
    error: '',
    isFetching: false,
    newSmurf: {
        name: '',
        age: '',
        height: '',
        id: 2
    }
};

export const smurfReducer = (state = initialValue, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case 'HANDLE_CHANGE':
            return {
                ...state,
                newSmurf: {
                    ...state.newSmurf,
                    [action.payload.name]: action.payload.value
                }
            }
        default:
            return state;
    }
};