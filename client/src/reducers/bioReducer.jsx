import { GET_ABOUT_DATA } from '../actions/types';

const initialState = {
  summary: null,
  education: [],
  personality: [],
  productDefined: [],
  skills: [],
  techSkills: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const {type, payload} = action
  
  switch (type) {
    case GET_ABOUT_DATA:
      const { summary, education, personality, productDefined, skills, techSkills} = payload.data
      //console.log(summary)
      return {
        ...state,
        summary,
        education,
        personality,
        productDefined,
        skills, 
        techSkills
      };
    // case ADD_LOG:
    //   return {
    //     ...state,
    //     logs: [...state.logs, action.payload],
    //     loading: false
    //   };
    // case DELETE_LOG:
    //   return {
    //     ...state,
    //     logs: state.logs.filter(log => log.id !== action.payload),
    //     loading: false
    //   };
    // case UPDATE_LOG:
    //   return {
    //     ...state,
    //     logs: state.logs.map(log =>
    //       log.id === action.payload.id ? action.payload : log
    //     )
    //   };
    // case SEARCH_LOGS:
    //   return {
    //     ...state,
    //     logs: action.payload
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload
    //   };
    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null
    //   };
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case LOGS_ERROR:
    //   console.error(action.payload);
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};
