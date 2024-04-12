import { Category } from "@/utils/enums";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}