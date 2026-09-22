import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      add: (product, qty) => {
        const quantity = Math.max(1, qty || product.pack);
        const items = [...get().items];
        const i = items.findIndex((x) => x.id === product.id);
        if (i >= 0) items[i] = { ...items[i], qty: items[i].qty + quantity };
        else items.push({ id: product.id, qty: quantity });
        set({ items });
      },
      setQty: (id, qty) => {
        const n = Math.max(0, Number(qty) || 0);
        set({
          items: n === 0 ? get().items.filter((x) => x.id !== id) : get().items.map((x) => (x.id === id ? { ...x, qty: n } : x)),
        });
      },
      remove: (id) => set({ items: get().items.filter((x) => x.id !== id) }),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((s, x) => s + x.qty, 0),
    }),
    { name: "natureat-cart" }
  )
);

export const useAccount = create(
  persist(
    (set) => ({
      company: null,
      login: (data) => set({ company: data }),
      logout: () => set({ company: null }),
    }),
    { name: "natureat-account" }
  )
);
