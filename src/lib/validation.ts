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

/**
 * The validation schema for filling in the patient's information for the doctor.
 *
 * **Note**: `idType` se refiere al tipo de identificación más común para el país de Argentina.
 */
export const PatientFormSchemaValidation = z.object({
  birthDate: z.coerce.date(),
  gender: z.enum(["Hombre", "Mujer", "Otro"]),
  address: z
    .string()
    .min(6, "Address must be at least 5 characters long")
    .max(100, "The limit is 100 characters"),
  profession: z
    .string()
    .min(2, "At least a profession is required")
    .max(50, "The limit is 50 characters"),
  civilStatus: z.enum(["Single", "Married", "Divorced", "Widow"]),
  phoneNumberAlt: z.string().optional(),
  healthInsuranceNumber: z
    .string()
    .min(6, "The limit is 6 characters")
    .max(10, "The limit is 10 characters"),
  allergies: z.string().optional() || undefined,
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
  additionalNotes: z.string().optional(),
  appointmentDate: z.coerce.date(),
  cancellationReason: z.string().optional(),
});

export const ConfirmAppointmentFormSchemaValidation = z.object({
  reason: z.string().optional(),
  additionalNotes: z.string().optional(),
  appointmentDate: z.coerce.date(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentFormSchemaValidation = z.object({
  reason: z.string().optional(),
  appointmentDate: z.coerce.date(),
  additionalNotes: z.string().optional(),
  cancellationReason: z
    .string()
    .min(5, "The reason must be at least 5 characters long")
    .max(500, "The limit is 500 characters"),
});

export const PersonalFormSchemaValidation = z.object({
  fullName: z
    .string()
    .min(2, "At least a name is required")
    .max(50, "The limit is 50 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Hombre", "Mujer", "Otro"]),
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
});

export const getAppointmentSchema = (type: string) => {
  switch (type) {
    case "confirmar":
      return ConfirmAppointmentFormSchemaValidation;
    case "cancelar":
      return CancelAppointmentFormSchemaValidation;
    default:
      return CreateAppointFormSchemaValidation;
  }
};
