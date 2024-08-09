import { z } from "zod";

export const PatientRegistrationSchemaValidaiton = z.object({
  fullname: z
    .string()
    .min(2, "At least a name is required")
    .max(50, "The limit is 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
});

export const PatientFormSchemaValidation = z.object({
  fullName: z
    .string()
    .min(2, "At least a name is required")
    .max(50, "The limit is 50 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string(),
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
  phoneNumberAlt: z.string(),
  healthInsurance: z
    .string()
    .min(10, "The limit is 10 characters")
    .max(70, "The limit is 70 characters"),
  healthInsuranceNumber: z
    .string()
    .min(6, "The limit is 6 characters")
    .max(10, "The limit is 10 characters"),
  allergies: z.string().optional(),
  currentMedicines: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastFamilyMedicalHistory: z.string().optional(),
  idType: z.enum(["DNI", "Carnet de Identidad", "CUIT"]),
  idNumber: z
    .string()
    .min(6, "The limit is 6 characters")
    .max(10, "The limit is 10 characters"),
  idPhoto: z.custom<File[]>().optional(),
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
