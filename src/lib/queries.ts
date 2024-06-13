import { api } from "~/lib/api";
import type { Product } from "~/types";

export async function getProducts() {
  return await api.get<Product[]>("/products");
}

export async function getProduct(id: number) {
  return await api.get<Product>(`/products/${id}`);
}
