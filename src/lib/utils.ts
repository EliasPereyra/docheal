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

// FIX: reemplazar btoa con una función de seguridad mas robusta
/**
 * Una función para "encriptar" la clave, usando la función btoa.
 *
 * @param key
 * @returns string
 */
export function encryptKey(key: string) {
  return btoa(key);
}

// FIX: change the atob func to a safer one
/**
 * Una función para "desincriptar" la clave, usando la función atob.
 *
 * @param key
 * @returns string
 */
export function decryptKey(key: string) {
  return atob(key);
}

/**
 *
 * @param file
 * @returns string
 */
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

/**
 * Esta función hace una conversión de un string a un objeto usando primero la función stringify y luego la función parse de JSON.
 *
 * @param value
 * @returns string
 */
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
