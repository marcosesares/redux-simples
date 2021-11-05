import { UPDATE_MIN, UPDATE_MAX } from "./actionTypes";

// Action Creator
export function setMin(newMin) {
  return {
    type: UPDATE_MIN,
    payload: newMin,
  };
}

// Action Creator
export function setMax(newMax) {
  return {
    type: UPDATE_MAX,
    payload: newMax,
  };
}
