import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/produt-info";
import { computedProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/produtc-list";

interface ProductDetailsProps{
    params: {
        slug: string
    }
}
const ProductDetails = async ({params: {slug}} :ProductDetailsProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug
                            }
                        }
                    }
                }
            }
        }
    })

    if(!product) return null;

    return ( 
        <div className="flex flex-col gap-3 pb-8">
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductInfo product={computedProductTotalPrice(product)}/>

            <ProductList products={product.category.products}/>
        </div>

     );
}
 
export default ProductDetails;