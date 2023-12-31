"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    name: string;
    imageUrls: string[];
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {

    const [currentImage, setCurrentImage] = useState(imageUrls[0])

    const handleImageClick = (imageUrl: string)=>{
        setCurrentImage(imageUrl)
    } 
  return (
    <div className="flex flex-col lg:min-h-full lg:w-3/5">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6 px-5 lg:px-0">
        {imageUrls?.map((imageUrl) => (
            <button 
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
                ${
                    imageUrl === currentImage &&
                    "border-2 border-solid border-primary"
                }
            `}
            onClick={()=>{handleImageClick(imageUrl)}}
            >

          <Image
            src={imageUrl}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[30px] w-[30px] border-primary"
            style={{
                objectFit: "contain",
            }}
            />
            </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
