import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserReducer } from "./Reducers/user.reducer";

const reducer = combineReducers({
  Ranu: UserReducer,
});

const initialState = {};

const middleware = [thunk];

const RanuStore = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default RanuStore;
