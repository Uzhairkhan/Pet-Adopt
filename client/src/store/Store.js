import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import petsReducer from "../reducer/Pets";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      pets: petsReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
