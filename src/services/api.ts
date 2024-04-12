import { IProduct } from "@/interfaces/product.interface";
import { Category } from "@/helpers/enums";

const baseUrl = import.meta.env.VITE_API_ENDPOINT || "https://fakestoreapi.com";

interface IFetchProducts {
  limit?: number;
  category?: Category;
}

/**
 * Fetches products from the API based on provided options.
 * @param {number} [limit] - The maximum number of products to fetch.
 * @param {Category} [category] - The category of products to fetch.
 * @returns {Promise<IProduct[]>} A promise that resolves to an array of products.
 */
export const fetchProducts = async ({
  limit,
  category,
}: IFetchProducts): Promise<IProduct[]> => {
  const response = await fetch(
    `${baseUrl}/products${
      category ? `/category/${encodeURIComponent(category)}` : ""
    }${limit ? `?limit=${limit}` : ""}`
  );
  return response.json();
};

/**
 * Fetches all available categories from the API.
 * @returns {Promise<Category[]>} A promise that resolves to an array of categories.
 */
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${baseUrl}/products/categories`);
  return response.json();
};
