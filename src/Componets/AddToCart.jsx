import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {RemovetoCart} from '../ReduxFile/counterSlice'

import { AddtoCart} from  '../ReduxFile/counterSlice'
import {decreaseCart} from  '../ReduxFile/counterSlice'


import { ToastContainer, toast, Flip, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddToCart() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.cart)
   let total = 0;
  console.log(data)
  return (
    <div>


      <div className='text-center mt-12'>
        <h1 className='text-3xl font-bold font-serif'>Shopping Cart</h1>
      </div>

      

         
     
    
    <div className='  mx-32'>
     <div className=' px-2 uppercase text-sm flex   rounded  py-5  items-center justify-between mt-5 font-thin '>
     <div>
     <h1>Product</h1>
     </div> 
     <div>
     <h1>Price</h1>
     </div> 
     <div>
     <h1>Quantity</h1>
     </div> 
     <div>
     <h1>Total</h1>
     </div> 
     <div>
     <h1>Delete</h1>
     </div> 
   
   
    
    </div>
    <hr/>
    
    {
          data.map((items) => {
            total += items.price * items.cartQty


       return     <div key={items._id}  className=' px-2 uppercase text-sm flex  border rounded shadow-black py-5 shadow items-center justify-between mt-5 font-thin '> 
       <div>
       <img className='w-20 h-24 '  src={items.image}  alt='img'  />
       </div>
       <div>
        <h1 className='text-red-500 font-medium'>${items.price}</h1>
       </div>

      <div className=' flex  items-center border shadow shadow-black px-2  rounded bg-slate-100 space-x-5'>
        <button  onClick={()=>{dispatch(decreaseCart(items)), toast.info("decrease quantity of item",{  autoClose: 1000,  transition:Zoom , hideProgressBar:true , position:"top-center"})}}  className='font-semibold  cursor-pointer text-lg hover:scale-105 hover:duration-300 '>-</button>
        <h1 className='font-semibold'>{items.cartQty} </h1>
        <button onClick={()=>{dispatch(AddtoCart(items)), toast.info("increase quantity of item ",{  autoClose: 1000, transition:Zoom , hideProgressBar:true , position:"top-center" }) }} className='font-semibold cursor-pointer hover:scale-105 hover:duration-300 text-lg'>+</button>
        <ToastContainer/>
      </div>
      <div>
        <h1 className=' font-semibold text-black'>$ {items.price}</h1>
      </div>
      <div>
        <h1 onClick={()=>{dispatch(RemovetoCart(items)),  toast.error("Item remove from cart ", {autoClose:1000 , transition:Bounce , hideProgressBar:true , position:"top-center" })}} className=' cursor-pointer font-semibold  px-3 py-1 rounded border bg-red-500 text-white'>Remove</h1>
        
      </div>

    </div>
            
          })
        } 
  
    <div className='mt-5 relative flex justify-between'>
    <div>
      <button className='px-3 py-1 border rounded '>Clear Cart</button>
    </div>
   

      <div>
      <div  className='flex justify-between' >
        <h1 className='text-lg font-serif '>Subtotal</h1>
        <h1 className='font-bold'>$ {total}.00</h1>
      </div>
  
        <small className='text-red-400 font-light'>Taxes and shoopping calculated at checkout</small>
        <div>
        <button   onClick={()=>toast.warn(` You have to pay $ ${total}`, {position: 'top-center', hideProgressBar:true , transition: Flip }  ) } className='bg-teal-900 w-full py-2 text-white font-semibold px-5  rounded hover:scale-110 hover:duration-300 hover:ease-in-out'>
          Continue
        </button>
      </div>
      </div>
    </div>
    </div>


    </div>
  )
}

export default AddToCart
