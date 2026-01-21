"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function FlowbiteInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.initFlowbite) {
      window.initFlowbite();
    }
  }, [pathname]);

  return null;
}
