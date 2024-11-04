import * as appwriteSdk from "node-appwrite";

export const {
  NEXT_PUBLIC_TD_ENDPOINT,
  TD_PROJECT_ID,
  TD_API_KEY,
  TD_BUCKET_ID,
  TD_DATABASE_ID,
  TD_PATIENT_COLLECTION_ID,
} = process.env;

const client = new appwriteSdk.Client();

client
  .setEndpoint(NEXT_PUBLIC_TD_ENDPOINT!)
  .setProject(TD_PROJECT_ID!)
  .setKey(TD_API_KEY!);

export const databases = new appwriteSdk.Databases(client);
export const users = new appwriteSdk.Users(client);
export const storage = new appwriteSdk.Storage(client);
export const messaging = new appwriteSdk.Messaging(client);
