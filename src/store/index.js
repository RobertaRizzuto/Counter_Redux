import { combineReducers, createStore } from "redux";

const initialState = {
  index: {
    value: 0,
  },
  color: {
    value: "green",
  },
};

const IndexReducer = (state = {}, action) => {
  switch (action.type) {
    case "precedente":
      return { ...state, value: state.value - 1 };

    case "prossimo":
      return { ...state, value: state.value + 1 };

    case "reset":
      return {...state, value: 0};

    default:
      return state;
  }
};

const ColorReducer = (state = {}, action) => {
  switch (action.type) {
    case "colorchange":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  index: IndexReducer,
  color: ColorReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
