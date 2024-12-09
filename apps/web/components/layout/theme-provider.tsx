"use client";

import { useEffect } from "react";
import { useColorStore } from "@/lib/store";

export function ThemeProvider() {
  const { setColorPropertiesFromClient } = useColorStore();

  useEffect(() => {
    setColorPropertiesFromClient();
  }, [setColorPropertiesFromClient]);

  return null;
}
