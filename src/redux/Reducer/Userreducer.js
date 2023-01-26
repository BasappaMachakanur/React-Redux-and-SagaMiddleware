import {API_CALL_FAILURE,API_CALL_REQUEST,API_CALL_SUCCESS} from "../../Constants/Constants"

let intialstate={
   fetching:false,
   data:null,
   error:null,
}


export default function Userreducer(state=intialstate, Action){
   switch (Action.type) {
    case API_CALL_REQUEST:
        return {...state, fetching:true,error:null}
     case API_CALL_SUCCESS:
        return {...state, fetching:false , data:Action.data};
    case API_CALL_FAILURE:
        return {...state , fetching:false , data:null , error:Action.error};
    default:
        return {...state}
   }
}


