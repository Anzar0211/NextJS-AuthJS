import { fetchProductByIdAction } from "@/actions"
import AddToCartButton from "../components/add-to-cart-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const ProductDetailsPage = async({params}) => {
        const getSession = await auth();
        if (!getSession?.user) {
          redirect("/unauth-page");
        }
    const getProductDetails=await fetchProductByIdAction(params.details)
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-12">
          <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky  top-0 text-center p-8">
            <img
              src={getProductDetails?.thumbnail}
              alt={getProductDetails.title}
              className="w-full rounded object-cover"
            />
            <hr className="border-black border-2 my-6" />
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {getProductDetails?.images.map((image) => (
                <img src={image} className="w-24 cursor-pointer" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">{getProductDetails?.title}</h2>
            <p className="mt-5 font-semibold">{getProductDetails?.price}</p>
            <h3 className="mt-3 text-xl font-semibold">
              {getProductDetails?.description}
            </h3>
            <AddToCartButton productItem={getProductDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsPage