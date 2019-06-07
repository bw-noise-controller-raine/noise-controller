import {
  
  REGISTER_SUCCESS,
  ERROR,
  LOADING,


}
  from '../actions'

const initialState = {
teachers: [],
signingUp: false,
error: '',
};

const registerReducer = (state = initialState, action) => {
  switch(action.type){

  
       case REGISTER_SUCCESS:
          console.log(action.paylaod);
      return{
          ...state,
          registering: false,
          credentials: [...state.credentials, action.payload]
      }
      
      case LOADING:
          console.log(action.payload);
          return{
              ...state,
              registering: true,
          }

      case ERROR:
          return{
              ...state,
              error: action.payload
          } 
          
    

    
          
    

      default:
          return state;


  }
}

export default registerReducer;
