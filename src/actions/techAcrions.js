import {GET_TECH, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR, GET_TECHS} from "./types";


// GET techs from server
export const getTechs = () => async dispatch =>{
    try {
        setLoading()
        const res = await fetch('/techs');
        const data = await res.json()

        dispatch({
            type: GET_TECHS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

//SET loading to be true
export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}