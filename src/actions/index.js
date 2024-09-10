"use server"

import { signIn,signOut } from "@/auth";


export async function fetchAllProductAction(){
    try {
        const result = await fetch("https://dummyjson.com/products",{
            method:"GET",
            cache:"no-store"
        });
        const data = await result.json();
        return{
            success:true,
            data:data?.products
        }

    } catch (error) {
        console.log(error);
        return{
            success:false,
            message:"Some error ocurred"
        }
    }
}
export async function fetchProductByIdAction(currentId){
    try {
        const result = await fetch(`https://dummyjson.com/products/${currentId}`,{
            method:"GET",
            cache:"no-store"
        });
        const data = await result.json();
        return data

    } catch (error) {
        console.log(error);
        return{
            success:false,
            message:"Some error ocurred"
        }
    }
}


export async function loginAction(){
    await signIn("github");
}

export async function logoutAction(){
    await signOut();
}