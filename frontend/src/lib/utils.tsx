import { Cell } from "@/types/balanceSheet";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTableCellClass(index: number) {
  return index > 0 ? "w-[25%] text-right" : "w-[50%] text-left";
}

export function isNegative(value: string) {
  if (!value) return null;

  const numberValue = parseFloat(value.replace(/,/g, ""));
  return numberValue < 0;
}

export const getCellValue = (value: string) => {
  if (!value) return "";

  return (
    <>
      {isNaN(parseFloat(value)) ? "" : "$"}
      {value}
    </>
  );
};

export function getDiffValue(cells?: Cell[]) {
  if (!cells) return null;

  return Math.floor(Number(cells?.[1].Value) - Number(cells?.[2].Value));
}

export function calcPercent(cells?: Cell[]) {
  if (!cells) return 0 + "%";

  const value = Number(cells?.[1].Value);
  const value2 = Number(cells?.[2].Value);
  const percent = (value / value2) * 100 - 100;

  return percent.toFixed(1) + "%";
}
