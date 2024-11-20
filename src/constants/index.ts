export const Gender = ["Hombre", "Mujer", "Otro"];

export const patientFormDefaultValues = {
  userId: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  birthDate: new Date(Date.now()),
  gender: undefined,
  address: "",
  profession: "",
  civilStatus: undefined,
  phoneNumberAlt: "",
  healthInsuranceNumber: "",
  allergies: "",
  currentMedicines: "",
  familyMedicalHistory: "",
  pastFamilyMedicalHistory: "",
  idType: undefined,
  idNumber: "",
  idPhotoUrl: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IDTypes = ["DNI", "Carnet de Extranjería", "Pasaporte"];
