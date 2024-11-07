"use server";

import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
import {
  databases,
  TD_APPOINTMENT_COLLECTION_ID,
  TD_DATABASE_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      TD_DATABASE_ID!,
      TD_APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );

    revalidatePath("/admin");
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("Error creating appointment: ", error);
  }
};
