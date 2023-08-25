import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

// import countreducer from "./reducer/count";
// import personreducer from "./reducer/person";
import thunk from "redux-thunk";
//汇总所有的reducer变为一个总的reducer
// const reducer = combineReducers({
//   count: countreducer,
//   person: personreducer,
// });
// 调用redux devtools
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
