export const Gender = ["Hombre", "Mujer", "Otro"];

export const patientFormDefaultValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  birthDate: new Date(Date.now()),
  gender: "Hombre",
  address: "",
  profession: "",
  civilStatus: "Single",
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
