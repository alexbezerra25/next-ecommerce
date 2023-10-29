import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/produt-info";
import { computedProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/produtc-list";
import SectionTitle from "@/components/ui/section-title";

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
        <div className="flex flex-col gap-8 pb-8 lg:container lg:gap-10 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9  lg:px-5">
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductInfo product={computedProductTotalPrice(product)}/>
        </div>
        <div className="flex flex-col gap-5">
            <SectionTitle className="pl-5">PRODUTOS RECOMENDADOS</SectionTitle>
            <ProductList products={product.category.products}/>
        </div>
        </div>

     );
}
 
export default ProductDetails;