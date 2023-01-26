import { legacy_createStore as createstore,applyMiddleware,compose } from "redux";
import Userreducer from "../Reducer/Userreducer";
import createsagaMiddleware  from "redux-saga"
import { watchersga } from "../../SagaMiddleware/Sagas";

const sagaMiddleware=createsagaMiddleware()

let reduxDevTools=window.__REDUX_DEVTOOLS_EXTENSION__&&  window.__REDUX_DEVTOOLS_EXTENSION__();



let store=createstore(
    Userreducer,
   compose( applyMiddleware(sagaMiddleware),reduxDevTools),
);

sagaMiddleware.run(watchersga)

export default store