declare type Gender = "Hombre" | "Mujer" | "Otro";

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface CreateUserParams {
  fullname: string;
  email: string;
  phoneNumber: string;
}

declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterPatientParams extends CreateUserParams {
  fullname: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  birthDate: Date;
  gender: Gender;
  address: string;
  profession: string;
  civilStatus: string;
  phoneNumberAlt: string | undefined;
  healthInsuranceNumber: string;
  allergies: string | undefined;
  currentMedicines: string | undefined;
  familyMedicalHistory: string | undefined;
  pastFamilyMedicalHistory: string | undefined;
  idType: string | undefined;
  idNumber: string | undefined;
  idPhotoUrl: FormData | undefined;
  treatmentConsent: boolean;
  disclosureConsent: boolean;
  privacyConsent: boolean;
}

declare interface CreateAppointmentParams {
  userId: string;
  patient: string;
  reason: string;
  additionalNotes?: string;
  appointmentDate: Date;
  status?: "pendiente" | "cancelado" | "completado";
}

declare interface UpdateAppointmentParams {
  userId: string;
  appointmentId: string;
  appointment: Appointment;
  type: string;
  status?: "pendiente" | "cancelado" | "anotado";
}
