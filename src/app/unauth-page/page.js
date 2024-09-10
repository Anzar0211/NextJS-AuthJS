import { auth } from "@/auth"
import { redirect } from "next/navigation"

const UnAuth = async() => {
    const getSession=await auth()
    if(getSession?.user) redirect("/");
  return (
    <div className="p-10">
        <h1 className="text-4xl font-bold">Please login to view this page</h1>
    </div>
  )
}
export default UnAuth