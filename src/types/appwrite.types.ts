import { Models } from "node-appwrite";

export interface Patient {
  userId: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  gender: string;
  address: string;
  profession: string;
  civilStatus: string;
  phoneNumberAlt: string;
  healthInsuranceNumber: string;
  allergies: string | undefined;
  currentMedicines: string | undefined;
  familyMedicalHistory: string | undefined;
  pastFamilyMedicalHistory: string | undefined;
  idType: string | undefined;
  idNumber: string | undefined;
  idPhotoUrl: string | undefined;
  treatmentConsent: boolean;
  disclosureConsent: boolean;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  appointmentDate: Date;
  reason?: string;
  additionalNotes?: string;
  status: "pendiente" | "cancelado" | "anotado";
  userId?: string;
  cancellationReason?: string | null;
}
