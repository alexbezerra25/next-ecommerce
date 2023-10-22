import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/produt-info";
import { computedProductTotalPrice } from "@/helpers/product";

interface ProductDetailsProps{
    params: {
        slug: string
    }
}
const ProductDetails = async ({params: {slug}} :ProductDetailsProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    if(!product) return null;

    return ( 
        <div className="flex flex-col gap-3 pb-5">
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductInfo product={computedProductTotalPrice(product)}/>
        </div>
        
     );
}
 
export default ProductDetails;