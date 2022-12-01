import { SET_AUTH } from "./actiontypes";
  
  
  const initState = {
    isauth: false
  }
  
  const reducer = (state = initState , { type, payload })=> {
    switch (type) {
  
      case SET_AUTH:{
  
       return { ...state, isauth: payload } 
      }
  
      
      default: {
        return state;
      }
    }
  }
  
  export default reducer;