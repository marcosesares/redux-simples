import { UPDATE_MIN, UPDATE_MAX } from "../actions/actionTypes";

const initialState = {
  min: 1,
  max: 10,
};

export default function numeros(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MIN:
      return {
        ...state,
        min: action.payload,
      };
    case UPDATE_MAX:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
