import React from "react";

interface ICategoryCard {
  categoryName: string;
  color?: string;
}
const CategoryCard: React.FC<ICategoryCard> = ({
  categoryName,
  color = "transparent",
}) => {
  return (
    <div className="category-card" style={{ backgroundColor:color }}>
      <p>{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
