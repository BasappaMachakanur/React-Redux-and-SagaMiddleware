import {put,call,takeLatest} from "redux-saga/effects"
import  Axios  from "axios"
// import {API_CALL_FAILURE,API_CALL_REQUEST,API_CALL_SUCCESS} from "../Constants/Constants"

export function* watchersga(){
    yield takeLatest("API_CALL_REQUEST" , Workersaga)
}

function fetchdata(){
    return Axios({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/users"
    })
}


function* Workersaga(){
    try {
        let response=yield call(fetchdata);
        let data=response.data;
      
    yield put({type:"API_CALL_SUCCESS", data})
        
    } catch (error) {
        yield put({type:"API_CALL_FAILURE", error})
    }
}
