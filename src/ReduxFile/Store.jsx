import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './counterSlice'
// import  {AddtoCArdReducer} from './Reducer'




export const store = configureStore({
  reducer: {
    
    cart : cartReducer,
    // data : AddtoCArdReducer
    
  },

 
 
})
