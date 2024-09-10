"use client"

import { loginAction, logoutAction } from "@/actions";
import Link from "next/link"


const Header = ({getSession}) => {
    const handleLogout=async()=>{
        await logoutAction();
    }
    const handleLogin=async()=>{
        await loginAction();
    }
  return (
    <header className="flex shadow-md p-4 bg-white min-h-[70px] tracking-wide relative z-50 items-center">
        <div className="flex flex-wrap items-center justify-between gap-6 w-full">
            <Link href={'/'}>Shopping Cart</Link>
        </div>
        <div>
            <ul className="flex justify-center items-center mr-5 gap-6">
                <li>
                    <Link href={'/cart'}>Cart</Link>
                </li>
                <li>
                    <Link href={'/'}>Products</Link>
                </li>
            </ul>
        </div>
        <div className="flex space-x-3">
            <form action={getSession?.user ? handleLogout :handleLogin}>
                <button type="submit" className="bg-black text-white p-1.5 text-sm rounded-l">
                    {getSession?.user ? "Logout" : "Login"}
                </button>
            </form>
        </div>
    </header>
  )
}
export default Header