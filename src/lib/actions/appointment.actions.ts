"use server";

import { ID, Query } from "node-appwrite";
import { revalidatePath } from "next/cache";
import {
  databases,
  TD_APPOINTMENT_COLLECTION_ID,
  TD_DATABASE_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.types";

/**
 * Quest an appointment.
 *
 * @param appointment
 */
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

/**
 * Obtiene las citas más recientes de forma descendente.
 *
 * @returns { scheduleCount, pendingCount, cancelledCount, total, documents }
 */
export const getLatestAppointments = async () => {
  try {
    const appointments = await databases.listDocuments(
      TD_DATABASE_ID!,
      TD_APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        switch (appointment.status) {
          case "anotado":
            acc.scheduledCount++;
            break;
          case "pendiente":
            acc.pendingCount++;
            break;
          case "cancelado":
            acc.cancelledCount++;
            break;
        }
        return acc;
      },
      initialCounts
    );

    const data = {
      ...counts,
      total: appointments.total,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.error("Error when trying to get latest appointments: ", error);
  }
};
