import { GET_RESUME_DATA, SET_LOADING } from '../actions/types';

const initialState = {
  aboutID: null,
  experience: [],
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action
  //console.log(payload)
  switch (type) {
    case GET_RESUME_DATA:
      //const { aboutID, experience } = payload.data
      console.log(payload)
      return {
        ...state, loading: false,
        experience: payload.data,

      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};
