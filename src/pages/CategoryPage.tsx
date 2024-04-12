import CardGrid from "@/components/CardGrid";
import { CategoryName } from "@/utils/constants";
import { Category } from "@/utils/enums";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <CardGrid
      category={category as Category}
      limit={8}
      title={CategoryName[category as Category]}
    />
  );
};

export default CategoryPage;
