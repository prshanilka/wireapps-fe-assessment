import { IProduct } from "@/interface/product.interface";
import { Category } from "@/helpers/enums";

const baseUrl = import.meta.env.VITE_API_ENDPOINT || "https://dummyjson.com";
export const fetchProducts = async ({
  limit,
  category,
}: {
  limit?: number;
  category?: Category;
}): Promise<IProduct[]> => {
  const response = await fetch(
    `${baseUrl}/products${
      category ? `/category/${encodeURIComponent(category)}` : ""
    }${limit ? `?limit=${limit}` : ""}`
  );
  return response.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${baseUrl}/products/categories`);
  return response.json();
};
