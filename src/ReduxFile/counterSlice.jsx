import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const cartSlice = createSlice({
  name: 'cart',
  initialState:  [],



  reducers: {
    AddtoCart: (state, action) => {
      const existingCard = state.findIndex((item) => item._id === action.payload._id);
      if (existingCard >= 0) {
        state[existingCard].cartQty += 1
      
      } 


      else {
        const tempProduct = { ...action.payload, cartQty: 1 }
        console.log(tempProduct)
        state.push(tempProduct)
      }
     
      localStorage.setItem("DATA_AddTOCart", JSON.stringify(state))
    },

    RemovetoCart: (state, action) => {
       return state.filter((item) => item._id !== action.payload._id)
       
      
    },


    decreaseCart: (state, action) => {
      const Decrement = state.findIndex((item) => item._id === action.payload._id)
      if(state[Decrement].cartQty > 1){
        state[Decrement].cartQty -= 1;
        // toast.info("Quantity Decrease ", { autoClose:1000, transition:Zoom })
      }

     else if( state[Decrement].cartQty === 1 ){
      const updatingCart =  state.filter((item)=> item._id !== action.payload)
      state.pop(updatingCart)
      // toast.error("Item Remove from  cart", { autoClose:1000, transition:Flip })
      // state = updatingCart
     }
      
     localStorage.setItem("Decrement", JSON.stringify(state))
       
    }




  }



  
})
{<ToastContainer/>}

// Action creators are generated for each case reducer function
export const { AddtoCart, decreaseCart, RemovetoCart, AddQuantity, IncrementQTY } = cartSlice.actions

export default cartSlice.reducer