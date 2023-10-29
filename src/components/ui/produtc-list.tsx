import ProductItem from "@/components/ui/product-item";
import { computedProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}:ProductListProps ) => {
    return ( 
        <div className="flex w-full gap-2 overflow-x-auto px-5  [&::-webkit-scrollbar]:auto ">
            {products.map(product=><ProductItem 
            key={product.id} 
            product={computedProductTotalPrice(product)}
            className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
            />)}
        </div>
     );
}
 
export default ProductList;