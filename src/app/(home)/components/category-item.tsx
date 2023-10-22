import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icons";
import { Category } from "@prisma/client";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps)=>{


    return (
    <Badge variant='outline' className="px-3 py-2 flex gap-2 rounded-lg">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="font-bold text-sm">{category.name}</span>
    </Badge>
    )
}

export default CategoryItem;