import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  fullname: string;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  status: "pending" | "cancelled" | "completed";
  reason: string;
  additionalNotes: string;
  appointmentDate: Date;
  userId: string;
  cancellationReason: string | null;
}
