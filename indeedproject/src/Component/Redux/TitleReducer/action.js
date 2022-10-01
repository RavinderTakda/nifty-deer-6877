
import * as types from "./actionTypes"

const getData=(data)=>(dispatch)=>{
    dispatch({type:types.GET_WHAT_REQUEST})
    dispatch({type:types.GET_WHAT_SUCESS,payload:data})
    dispatch({type:types.GET_WHAT_FAILURE})
}
export {getData}