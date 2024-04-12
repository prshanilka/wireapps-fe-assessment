import CategoryCard from "@/elements/CategoryCard";
import { fetchCategories } from "@/services/api";
import { CategoryColor, CategoryName } from "@/utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const CategoryGrid: React.FC = () => {
  const { data: categories } = useSWR({}, fetchCategories);
  return (
    <section className="category-grid">
      <div className="container">
        <div className="row">
          {categories?.map((category, index) => (
            <div className="col-12 col-md-6" key={`category-${index}`}>
              <Link to={`/category/${category}`} className="card-wrapper-link">
                <CategoryCard
                  color={CategoryColor[category]}
                  categoryName={CategoryName[category]}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
