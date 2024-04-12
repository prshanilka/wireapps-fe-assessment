import CardGrid from "@/components/CardGrid";
import { CategoryName } from "@/helpers/constants";
import { Category } from "@/helpers/enums";
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
