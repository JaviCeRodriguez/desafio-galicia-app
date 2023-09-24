/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Tenencia } from "../models/common";

type Favorite = {
  tenencias: Tenencia[];
  addFavorite: (tenencia: Tenencia) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoriteStore = create<Favorite>()(
  persist(
    (set) => ({
      tenencias: [],
      addFavorite: (tenencia: Tenencia) =>
        set((state) => ({ tenencias: [...state.tenencias, tenencia] })),
      removeFavorite: (id: number) =>
        set((state) => ({
          tenencias: state.tenencias.filter((tenencia) => tenencia.id !== id),
        })),
    }),
    {
      name: "favorite-storage",
    }
  )
);
