import { Product } from "@/types/product";

type SourceProduct = {
  productName: string;
  descriptionShort?: string;
  photo?: string;
  price: number;
};

type ProductsApiResponse = {
  success?: boolean;
  products?: SourceProduct[];
};

type ProductsInternalApiResponse = {
  products?: Product[];
  error?: string;
};

const INTERNAL_PRODUCTS_ENDPOINT = "/api/products";

function getEnvValue(...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

function buildRemoteProductsUrl(): string {
  const endpoint = getEnvValue("PRODUCTS_ENDPOINT", "NEXT_PUBLIC_PRODUCTS_ENDPOINT");
  if (!endpoint) {
    throw new Error("A variável PRODUCTS_ENDPOINT (ou NEXT_PUBLIC_PRODUCTS_ENDPOINT) não foi definida.");
  }

  if (endpoint.startsWith("http://") || endpoint.startsWith("https://")) {
    return endpoint;
  }

  const baseUrl = getEnvValue("API_BASE_URL", "NEXT_PUBLIC_API_BASE_URL");
  if (!baseUrl) {
    throw new Error("A variável API_BASE_URL (ou NEXT_PUBLIC_API_BASE_URL) não foi definida.");
  }

  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return new URL(normalizedEndpoint, normalizedBaseUrl).toString();
}

async function fetchFromApi<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Não foi possível carregar os dados da API.");
  }

  return (await response.json()) as T;
}

export function normalizeProducts(products: SourceProduct[]): Product[] {
  return products.map((item, index) => ({
    id: index + 1,
    title: item.productName,
    description: item.descriptionShort ?? "Sem descrição disponível.",
    price: item.price,
    image: item.photo ?? "/product-placeholder.svg",
    category: "Tecnologia",
  }));
}

export async function getProductsFromRemoteApi(): Promise<Product[]> {
  const remoteUrl = buildRemoteProductsUrl();
  const data = await fetchFromApi<ProductsApiResponse>(remoteUrl);
  return normalizeProducts(data.products ?? []);
}

export async function getProductsFromInternalApi(): Promise<Product[]> {
  const data = await fetchFromApi<ProductsInternalApiResponse>(INTERNAL_PRODUCTS_ENDPOINT);

  if (data.error) {
    throw new Error(data.error);
  }

  return data.products ?? [];
}

export async function getProducts(): Promise<Product[]> {
  if (typeof window !== "undefined") {
    return getProductsFromInternalApi();
  }

  return getProductsFromRemoteApi();
}