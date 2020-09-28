import api from "../utilities/api";
import { GET_ABOUT_DATA } from "./types";

//Fetch data from database
export const fetchAboutData = () => async dispatch => {
  const aboutJay = "5d713995b721c3bb38c1f5d0";
  const resumeJayID = '5f5eb93fcd8e5501ef098bed';
  //console.log("fetchAbout");
  try {
    const res = await api.get(`/about/${aboutJay}`);
    // const data = await api.get(`/resume/${resumeJayID}`);
    // console.log(data);
    dispatch({
      type: GET_ABOUT_DATA,
      payload: res.data
    })

  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors)
  }

}