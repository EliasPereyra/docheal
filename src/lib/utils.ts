import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Export a copy of the JSON.parse method for better reading
 * @param user: unknown
 * @returns
 */
export const stringifyValue = (value: unknown) =>
  JSON.parse(JSON.stringify(value));
