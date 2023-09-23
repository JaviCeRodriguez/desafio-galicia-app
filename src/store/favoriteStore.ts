/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Favorite = {
  product: any[];
};

export const useFavoriteStore = create<Favorite>()(
  persist(
    (set) => ({
      product: [],
      addFavorite: (product: any) =>
        set((state) => ({ product: [...state.product, product] })),
      removeFavorite: (id: string) =>
        set((state) => ({
          product: state.product.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "favorite-storage",
    }
  )
);
