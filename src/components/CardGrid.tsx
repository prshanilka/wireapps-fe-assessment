import React, { useState } from "react";
import useSWR from "swr";
import { fetchProducts } from "@/services/api";
import ProductCard from "@/elements/ProductCard";
import { Category } from "@/helpers/enums";

interface ICardGrid {
  limit?: number;
  category?: Category;
  title: string;
}
const CardGrid: React.FC<ICardGrid> = ({ limit = 4, category, title }) => {
  const [productCount, setProductCount] = useState<number>(limit);
  const { data: products } = useSWR(
    { limit: productCount, category },
    fetchProducts
  );
  return (
    <section className="card-grid-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title">{title}</h2>
            <div className="card-grid">
              {products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="button-wrapper">
              <button
                className="btn"
                onClick={() => setProductCount((prev) => prev + limit)}
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
