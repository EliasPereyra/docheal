import * as appwriteSdk from "node-appwrite";

const { NEXT_PUBLIC_TD_ENDPOINT, TD_PROJECT_ID, TD_API_KEY } = process.env;

const client = new appwriteSdk.Client();

client
  .setEndpoint(NEXT_PUBLIC_TD_ENDPOINT!)
  .setProject(TD_PROJECT_ID!)
  .setKey(TD_API_KEY!);

export const databases = new appwriteSdk.Databases(client);
export const users = new appwriteSdk.Users(client);
export const storage = new appwriteSdk.Storage(client);
export const messaging = new appwriteSdk.Messaging(client);
