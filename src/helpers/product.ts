import { Product } from "@prisma/client";

interface ProductWithTotalPrice extends Product {
    totalPrice: number;
}

export const computedProductTotalPrice = (product: Product): ProductWithTotalPrice =>{
    if(Number(product.discountPercent) === 0){
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        };
    }

    const discountPrice = 
    Number(product.basePrice) * Number(product.discountPercent);

    const totalPrice = Number(product.basePrice) - discountPrice
    return {
        ...product,
        totalPrice
    }
}   