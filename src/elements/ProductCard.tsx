import React from "react";
import { IProduct } from "@/interface/product.interface";
import { CategoryColor } from "@/helpers/constants";
interface IProductCard {
  product: IProduct;
}
const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <div className="product-card">
      <p className="card-title">{product.title}</p>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <figure>
            <img src={`${product.image}`} alt="product image" />
          </figure>
        </div>
        <div
          className="card-content"
          style={{ backgroundColor: CategoryColor[product.category] }}
        >
          <p className="card-price">{`Rs ${product.price}`}</p>
          <p className="card-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
