import { SET_LOADING, SET_URL } from "../actions/types";

const initialState = {
  url:"home",
  loading: true,
  error: {}
};


export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_URL:
      return {
        ...state,
        url: payload,
        loading: false
      };
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case PROFILE_ERROR:
    //   return {
    //     ...state,
    //     error: payload,
    //     loading: false,
    //     profile: null
    //   };
    // case CLEAR_PROFILE:
    //   return {
    //     ...state,
    //     profile: null,
    //     repos: []
    //   };
    // case GET_REPOS:
    //   return {
    //     ...state,
    //     repos: payload,
    //     loading: false
    //   };
    // case NO_REPOS:
    //   return {
    //     ...state,
    //     repos: []
    //   };
    default:
      return state;
  }
}