import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import {AddtoCardReducer} from '../ReduxFile/Reducer'
// import {AddtoCardBtn} from '../ReduxFile/Action'
// import {addtocard} from '../ReduxFile/Reducer'
//  import {AddtoCardBtn} from '../ReduxFile/Action'
import {AddtoCart} from  '../ReduxFile/counterSlice'

import { ToastContainer, toast, Bounce, Zoom, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductList() {
     
    const [data, setData] = useState([])
    const [loading, isLoading] = useState([true])
    const dispatch = useDispatch()
    
  console.log(data)
    useEffect(() => {

        axios.get('https://innocenti.onrender.com/products')
            .then((response) => {
                setData(response.data)
                isLoading(false)
            })
            .catch((error)=>{
                isLoading(false)
                console.log(error)
            })
            

    }, [])


    const notify = () => toast(" 🦄 Added to Cart",
        {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide
          
            
    });


    return (
        <>
        {
            loading?
        <div className='flex items-center  justify-center mt-32 gap-4 animate-pulse '>
            <div className='h-3 w-3 rounded-full bg-purple-700'></div>
            <div className='h-4 w-4 rounded-full bg-purple-700'></div>
            <div className='h-5 w-5 rounded-full bg-purple-700'></div>
            <div className='text-purple-900 text-6xl italic font-semibold'>Loading..</div>
          
        </div>:
            <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4'>
              {
                data.map((items)=>{
                return   <div key={items._id} className='p-5 rounded'>
                                <img  className='h-[25rem]  w-full ' src={items.image} alt='product' />
                                <div className='text-lg font-serif flex items-center justify-between'>
                                    <ul>
                                        <li>Name</li>
                                        <li>Price</li>

                                    </ul>
                                    <ul>
                                        <li>{items.name}</li>
                                        <li>${items.price}</li>

                                    </ul>

                                </div>

                                <div>
                                    <button  onClick={()=>{dispatch(AddtoCart(items));  notify()  }  } className='border w-full bg-purple-800 hover:bg-purple-900 hover:scale-110 hover:duration-500 hover:ease-in-out py-2 ring-1 rounded-lg shadow-2xl text-white font-bold'>Add to Card</button>
                                    <ToastContainer />
                                </div>

                            </div>
                })
              }
              <ToastContainer />
            </div>
        }
       

        </>
    )
}

export default ProductList;
