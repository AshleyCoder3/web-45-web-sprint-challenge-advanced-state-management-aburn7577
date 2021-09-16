import axios from 'axios';
export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FAIL_FETCH = 'FAIL_FETCH'
export const NEW_SMURF = 'NEW_SMURF'
export const ERROR = 'ERROR'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCH })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("🚀 ~ file: index.js ~ line 8 ~ res", res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FAIL_FETCH, payload: JSON.stringify(err) })
        })
}
export function addSmurf(newSmurf) {
    return {
        type: NEW_SMURF, payload: newSmurf
    }
}
export function setError() {
    return {
        type: ERROR, payload: 'all Fields needed'
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.