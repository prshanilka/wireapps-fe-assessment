import { Category } from "@/helpers/enums";
interface IProductRating {
  rate: number;
  count: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  rating: IProductRating;
}
