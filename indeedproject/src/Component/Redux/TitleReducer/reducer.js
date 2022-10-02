import { GET_WHAT_SUCESS } from "./actionTypes"



const init={
    what:[],
    where:[]
}

const TitleReducer=(state=init,action)=>{
    const {type,payload}=action
 
    switch(type){
        case GET_WHAT_SUCESS:
            return {...state,where:payload.location,what:payload.title}
        default:
            return state
    }
}
export {TitleReducer}