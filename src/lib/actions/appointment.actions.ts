"use server";

import { ID, Query } from "node-appwrite";
import { revalidatePath } from "next/cache";
import {
  databases,
  messaging,
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

/**
 * For creating a sms message.
 *
 * @param userId
 * @param content
 * @returns
 */
export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    const sms = await messaging.createSms(ID.unique(), content, [], [userId]);

    return parseStringify(sms);
  } catch (error) {
    console.error("There was an error when creating the sms: ", error);
  }
};

/**
 * Para actualizar un turno, se necesita el id del turno, el turno actualizado y el id del usuario.
 * El ID del usuario es para mandarle una notificacion por sms.
 * El tipo de turno es para decidir el tipo de mensaje de confirmacion que se envia.
 *
 * @param appointmentId
 * @param newAppointment
 * @param userId
 * @param type
 * @returns
 */
export const updateAppointment = async ({
  appointmentId,
  appointment,
  userId,
  type,
}: UpdateAppointmentParams) => {
  try {
    const isAppointment = await databases.getDocument(
      TD_DATABASE_ID!,
      TD_APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    if (!isAppointment) {
      throw new Error("The appointment does not exist");
    }

    const updatedAppointment = await databases.updateDocument(
      TD_DATABASE_ID!,
      TD_APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment
    );

    if (!updatedAppointment) throw Error;

    const messageContent = `Saludos desde Docheal. ${
      type === "confirmar"
        ? `El turno ha sido confirmado para la fecha ${appointment.appointmentDate} - ${appointment.reason}`
        : `Lamento informarle que su turno ha sido no ha sido confirmado. El motivo es ${appointment.cancellationReason}`
    }`;

    await sendSMSNotification(userId, messageContent);

    revalidatePath("/admin");

    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("There was an error when updating the appointment: ", error);
  }
};
