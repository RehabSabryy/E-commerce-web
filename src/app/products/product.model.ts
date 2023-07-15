export interface iProduct {
  title: string;
  image: string;
  price: number;
  category?: string;
  description?: string;
  id?: number;
  rating?: { rate: number; count: number };
  quantity?: number;
}
