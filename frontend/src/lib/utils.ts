import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNegative(value: string) {
  const numberValue = parseFloat(value.replace(/,/g, ""));
  return numberValue < 0;
}
