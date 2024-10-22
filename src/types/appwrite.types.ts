import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  fullname: string;
}
