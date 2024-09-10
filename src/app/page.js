import { fetchAllProductAction } from "@/actions";
import ProductCard from "./components/product-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const getSession=await auth();
  if(!getSession?.user) redirect("/unauth-page")
  const getAllProducts = await fetchAllProductAction();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-10 mx-auto p-2">
        {getAllProducts?.data && getAllProducts.data.length > 0 ? (
          getAllProducts.data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
