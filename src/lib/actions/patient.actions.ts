"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

import { stringifyValue } from "../utils";

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
      user.name
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

// TODO: Get a single user

// TODO: Register a patient

// TODO: get a single patient
