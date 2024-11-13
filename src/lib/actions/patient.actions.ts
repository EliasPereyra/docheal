"use server";

import { ID, Query, InputFile } from "node-appwrite";
import {
  databases,
  storage,
  TD_BUCKET_ID,
  TD_DATABASE_ID,
  TD_PATIENT_COLLECTION_ID,
  users,
} from "../appwrite.config";

import { parseStringify, stringifyValue } from "../utils";

/**
 * Create an appwrite user
 *
 * @param user: CreateUserParams
 * @returns User
 * @throws: Error when creating the user
 */
export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.fullname
    );

    return stringifyValue(newUser);
  } catch (err) {
    // We need to check if there's already a user with these data. For that, we need to check the error
    // status code 409, which is when there's a conflict
    if (err && err.code === 409) {
      const existingUser = await users.list([Query.equal("email", user.email)]);

      return existingUser.users[0];
    }

    console.error("There was an error when creating the user: ", err);
  }
};

/**
 * Get a user by id
 *
 * @param userId
 * @returns User
 * @Error Shows by console the error
 */
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return stringifyValue(user);
  } catch (error) {
    console.error("There was an error when getting the user: ", error);
  }
};

export const registerPatient = async ({
  idPhotoUrl,
  ...patient
}: RegisterPatientParams) => {
  try {
    let photoFile;
    if (idPhotoUrl) {
      const inputFile = InputFile.fromBlob(
        idPhotoUrl.get("blobFile") as Blob,
        idPhotoUrl.get("fileName") as string
      );

      photoFile = await storage.createFile(
        TD_BUCKET_ID!,
        ID.unique(),
        inputFile
      );
    }

    const newPatient = await databases.createDocument(
      TD_DATABASE_ID!,
      TD_PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        idDocumentNumber: photoFile?.$id ? photoFile.$id : null,
        idPhotoUrl: photoFile?.$id
          ? `${process.env
              .NEXT_PUBLIC_TD_ENDPOINT!}/storage/buckets/${TD_BUCKET_ID}/files/${
              photoFile.$id
            }/view??project=${process.env.TD_PROJECT_ID!}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while registering the patient: ", error);
  }
};

export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      TD_DATABASE_ID!,
      TD_PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error("An error occurred while getting the patient: ", error);
  }
};
