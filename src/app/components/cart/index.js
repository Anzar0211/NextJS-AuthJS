"use client"
import { auth } from "@/auth"
import { removeFromCart } from "@/store/slices/cart-slice"
import { redirect } from "next/navigation"
import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    const[totalAmount,setTotalAmount]=useState(0);
    const{cart}=useSelector(state=>state)
    console.log();
    const dispatch = useDispatch();
        const handleRemoveFromCart = (currentItemId) => {
          dispatch(removeFromCart(currentItemId));
        };
    if(cart?.cartItems?.length==0) return <h1>Cart is Empty</h1>
    useEffect(()=>{
        setTotalAmount(
            cart?.cartItems?.reduce((acc,item)=>acc+item.price,0)
        )
    },[cart?.cartItems])
  return (
    <div className="bg-white py-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-black">Cart</h2>
        <div className="overflow-y-auto">
          <table className="mt-12 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-700 p-4">Title</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
                {
                    
                    cart?.cartItems?.map((item)=>(
                        <tr key={item.id} className="text-sm text-gray-700">
                            <td className="p-4">
                                <div className="flex items-center gap-6 w-max">
                                    <div className="h-36 shrink-0">
                                        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-contain"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">{item?.title}</p>
                                </div>
                            </td>
                            <td className="p-4">{item.price}</td>
                            <td className="p-4">
                                <button onClick={()=>handleRemoveFromCart(item.id)} className="bg-black text-white p-3">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-6">
          <div className="text-lg font-bold">Total Amount: {totalAmount}

          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Cart