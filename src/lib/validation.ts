import { z } from "zod";

/**
 * The validation schema for registering a patient.
 */
export const PatientRegistrationSchemaValidation = z.object({
  fullname: z
    .string()
    .min(2, "At least a name is required")
    .max(50, "The limit is 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

// TODO: Refactor some variable names for better readability
/**
 * The validation schema for filling in the patient's information for the doctor.
 *
 * **Note**: `idType` se refiere al tipo de identificación más común para el país de Argentina.
 */
export const PatientFormSchemaValidation = z.object({
  fullName: z
    .string()
    .min(2, "At least a name is required")
    .max(50, "The limit is 50 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z
    .string()
    .min(6, "Address must be at least 5 characters long")
    .max(100, "The limit is 100 characters"),
  profession: z
    .string()
    .min(2, "At least a profession is required")
    .max(50, "The limit is 50 characters"),
  civilStatus: z.enum(["Single", "Married", "Divorced", "Widow"]),
  phoneNumberAlt: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  healthInsuranceNumber: z
    .string()
    .min(6, "The limit is 6 characters")
    .max(10, "The limit is 10 characters"),
  allergies: z.string().optional(),
  currentMedicines: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastFamilyMedicalHistory: z.string().optional(),
  idType: z.enum(["DNI", "Identity_Card", "CUIT"]),
  // Número de documento de Identidad
  idNumber: z
    .string()
    .min(6, "The limit is 6 characters")
    .max(10, "The limit is 10 characters"),
  idPhotoUrl: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must accept the treatment consent",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must accept the disclosure consent",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must accept the privacy consent",
    }),
});

/**
 * The validation schema for creating an appointment.
 */
export const CreateAppointFormSchemaValidation = z.object({
  reason: z
    .string()
    .min(5, "The reason must be at least 5 characters long")
    .max(50, "The limit is 50 characters"),
  additionalNotes: z
    .string()
    .min(10, "The reason must be at least 10 characters long")
    .max(100, "The limit is 100 characters"),
  appointmentDate: z.coerce.date(),
});
