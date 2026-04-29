"use client";

import { useEffect, useState } from "react";

import { getProducts } from "@/services/api";
import { Product } from "@/types/product";

type UseProductsResult = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        const response = await getProducts();

        if (isMounted) {
          setProducts(response);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Erro inesperado.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
}