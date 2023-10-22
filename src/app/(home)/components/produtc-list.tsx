import ProductItem from "@/components/ui/product-item";
import { computedProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}:ProductListProps ) => {
    return ( 
        <div className="flex w-full gap-2 overflow-x-auto px-3 [&::-webkit-scrollbar]:hidden ">
            {products.map(product=><ProductItem key={product.id} product={computedProductTotalPrice(product)}/>)}
        </div>
     );
}
 
export default ProductList;