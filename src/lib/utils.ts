import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Export a copy of the JSON.parse method for better reading
 * @param user: unknown
 * @returns any
 */
export const stringifyValue = (value: unknown) =>
  JSON.parse(JSON.stringify(value));

// TODO: reemplazar btoa con una función de seguridad mas robusta
/**
 * Una función que funciona para "encriptar" la clave, usando la función btoa.
 *
 * @param key
 * @returns string
 */
export function encryptKey(key: string) {
  return btoa(key);
}

export function decryptKey(key: string) {
  return atob(key);
}
