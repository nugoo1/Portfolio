import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `MOBILE_TOGGLE`) {
    return Object.assign({}, state, {
      ...state,
      isMobile: action.isMobile
    })
  }
  return state
}

const initialState = { isMobile: false }

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore
