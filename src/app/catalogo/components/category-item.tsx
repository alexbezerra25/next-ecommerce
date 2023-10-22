import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>

    <div className="flex flex-col cursor-pointer">
      <div className="bg-category-item-gradient h-[150px] flex w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={category?.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt={category.slug}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="bg-accent py-3 rounded-bl-lg rounded-br-lg">
        <p className="text-sm font-semibold text-center">{category.name}</p>
      </div>
    </div>
    </Link>
  );
};

export default CategoryItem;
