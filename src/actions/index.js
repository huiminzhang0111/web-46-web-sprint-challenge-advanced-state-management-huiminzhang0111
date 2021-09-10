import axios from 'axios';
//import { response } from 'msw/lib/types';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = ()=>{
    return((dispatch => {
        dispatch(fetchStart())
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(errorMessage=>{
                dispatch({type: FETCH_FAIL, payload: errorMessage})
            })
    }))
}

export const addSmurf = (newSmurf) => {
    return((dispatch =>{
        dispatch(addNewSmurf())
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res =>{
                dispatch({type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(error=>{
                dispatch({type: FETCH_FAIL, payload: error.response.data.Error})
            })
    }))
}



export const fetchStart = ()=>{
    return({type: FETCH_START});
}

export const fetchSuccess =smurfs =>{
    return({type: FETCH_SUCCESS, payload: smurfs});
}

export const fetchFail = errorMessage => {
    return({type: FETCH_FAIL, payload: errorMessage});
}

export const addNewSmurf = smurfs => {
    return({type: ADD_NEW_SMURF, payload: smurfs})
}

export const setError = error => {
    return({type: SET_ERROR})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.