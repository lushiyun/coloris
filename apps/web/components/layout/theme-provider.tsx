"use client";

import { useEffect } from "react";
import { useColorStore } from "@/lib/store";

export function ThemeProvider() {
  const { setColorProperties } = useColorStore();

  useEffect(() => {
    setColorProperties();
  }, [setColorProperties]);

  return null;
}
