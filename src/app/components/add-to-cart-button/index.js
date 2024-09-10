"use client"

import { Button } from "@/components/ui/button"
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

import { useDispatch, useSelector } from "react-redux";



const AddToCartButton = ({productItem}) => {
    const {cart}=useSelector(state=>state);
    console.log(cart?.cartItems);
    const dispatch=useDispatch();
    const handleAddToCart=()=>{
        dispatch(addToCart(productItem))
    }
    const handleRemoveFromCart=()=>{
        dispatch(removeFromCart(productItem?.id))
    }

  return (
    <div className="mt-4">
      <button type="button" onClick={
        cart?.cartItems.some(item=>item.id===productItem.id)?handleRemoveFromCart : handleAddToCart
      } className="bg-black text-sm text-white p-2">{
            cart.cartItems.some((item)=>item.id===productItem.id)?"Remove from cart" : "Add to Cart"
        }</button>
    </div>
  );
}
export default AddToCartButton