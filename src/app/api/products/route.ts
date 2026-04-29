import { NextResponse } from "next/server";

import { getProductsFromRemoteApi } from "@/services/api";

export async function GET() {
  try {
    const products = await getProductsFromRemoteApi();
    return NextResponse.json({ products });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao carregar produtos.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}