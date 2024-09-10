"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"


const ProductCard = ({product}) => {
    const router=useRouter();
  return (
    <Card>
        <CardContent>
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className="p-6">
                <CardTitle className="text-lg font-bold">
                    {product?.title}
                </CardTitle>
            </div>
            <div className="mt-4 flex items-center flex-wrap gap-2 justify-between">
                <p className="text-lg font-extrabold">
                    {product?.price}
                </p>
                <div>
                    <Button onClick={()=>router.push(`/${product?.id}`)} className="bg-black text-white">Details</Button>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
export default ProductCard