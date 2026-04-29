"use client";

import { useState } from "react";

import { HEADER_CATEGORIES } from "@/constants";

export function useHeaderCategories(initialCategory = "Ofertas do dia") {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return {
    categories: HEADER_CATEGORIES,
    activeCategory,
    setActiveCategory,
  };
}