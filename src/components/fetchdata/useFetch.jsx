import { useReducer, useEffect } from "react";
import axios from "axios";
const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};
const initialState = {
  data: [],
  loading: true,
  error: null,
};
function reducer(state, { type, payload }) {// reducer is two parts  type and payload 
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
      break;

    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload, loading: false };
      break;
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
      default :
      return state;
  }
}
function useFetch(url) {
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        dispatch({type:ACTIONS.API_REQUEST});
        axios.get(url).then((res)=>{
dispatch({type:ACTIONS.FETCH_DATA,payload:res.data})
        }).catch((e)=>{
dispatch({type:ACTIONS.ERROR,payload:e.message})
        });
    },[url]);
    return state;
}
export default useFetch;
