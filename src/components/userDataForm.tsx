"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import CustomFormField, { FormFieldType } from "./CustomFormField";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Form, FormControl } from "./ui/form";
import { Button } from "./ui/button";
import { FileUploader } from "./fileUploader";
import { SelectItem } from "./ui/select";
import { Label } from "./ui/label";

import { PatientFormSchemaValidation } from "@/lib/validation";
import { registerPatient } from "@/lib/actions/patient.actions";
import { Gender, IDTypes, patientFormDefaultValues } from "@/constants";

export function UserDataForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof PatientFormSchemaValidation>>({
    resolver: zodResolver(PatientFormSchemaValidation),
    defaultValues: patientFormDefaultValues,
  });

  const onSubmit = async (
    values: z.infer<typeof PatientFormSchemaValidation>
  ) => {
    setIsLoading(true);

    let formData;
    if (values.idPhotoUrl && values.idPhotoUrl.length > 0) {
      const blobFile = new Blob([values.idPhotoUrl[0]], {
        type: values.idPhotoUrl[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.idPhotoUrl[0].name);
    }

    try {
      const patient = {
        userId: user.$id,
        fullname: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        address: values.address,
        profession: values.profession,
        civilStatus: values.civilStatus,
        phoneNumberAlt: values.phoneNumberAlt,
        healthInsuranceNumber: values.healthInsuranceNumber,
        allergies: values.allergies,
        currentMedicines: values.currentMedicines,
        familyMedicalHistory: values.familyMedicalHistory,
        pastFamilyMedicalHistory: values.pastFamilyMedicalHistory,
        idType: values.idType,
        idNumber: values.idNumber,
        idPhotoUrl: values.idPhotoUrl ? formData : undefined,
        treatmentConsent: values.treatmentConsent,
        disclosureConsent: values.disclosureConsent,
        privacyConsent: values.privacyConsent,
      };

      const newPatient = await registerPatient(patient);

      if (newPatient) {
        toast.success("Datos registrados exitosamente");
        router.push(`/patients/${newPatient.$id}/create-appointment`);
      }
    } catch (err) {
      toast.error("Error al registrar los datos");
      console.error(err);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Información Personal</h3>
          </div>
          {/* NOTE: Seccion de informacion personal */}
          <section className="flex flex-col gap-4">
            <CustomFormField
              control={form.control}
              name="fullName"
              label="Nombre Completo"
              fieldType={FormFieldType.INPUT}
            />
            <div className="flex gap-10">
              <div className="flex flex-col gap-6 w-full">
                <CustomFormField
                  control={form.control}
                  name="email"
                  label="Email"
                  fieldType={FormFieldType.INPUT}
                />

                {/* FIXME: Cambiar a estado civil */}
                <CustomFormField
                  control={form.control}
                  name=""
                  label="Localidad"
                  fieldType={FormFieldType.INPUT}
                />

                <CustomFormField
                  control={form.control}
                  name="address"
                  label="Dirección"
                  fieldType={FormFieldType.INPUT}
                />

                <CustomFormField
                  control={form.control}
                  name="birthDate"
                  label="Fecha de Nacimiento"
                  fieldType={FormFieldType.DATE_PICKER}
                />
              </div>

              <div className="flex flex-col gap-6 w-full">
                {/* TODO: improve the styling */}
                <CustomFormField
                  control={form.control}
                  name="phoneNumber"
                  label="Número de Teléfono"
                  fieldType={FormFieldType.PHONE_INPUT}
                />

                <div className="flex flex-col gap-2">
                  <label>Género</label>
                  <CustomFormField
                    control={form.control}
                    label=""
                    fieldType={FormFieldType.SKELETON}
                    name="gender"
                    renderSkeleton={(field) => (
                      <FormControl>
                        <RadioGroup
                          className="flex gap-4 h-10"
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          {Gender.map((option, i) => (
                            <div
                              className="flex gap-2 items-center bg-[#181D30] border border-[#2C3558] border-dashed rounded-md px-4"
                              key={option}
                            >
                              <RadioGroupItem
                                value={option}
                                id={option}
                                className="radio-group"
                              />
                              <Label htmlFor={option}>{option}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </div>

                <CustomFormField
                  control={form.control}
                  name="profession"
                  label="Ocupación"
                  fieldType={FormFieldType.INPUT}
                />

                <CustomFormField
                  name="phoneNumberAlt"
                  control={form.control}
                  label="Número de Teléfono Auxiliar"
                  fieldType={FormFieldType.PHONE_INPUT}
                />
              </div>
            </div>
          </section>

          {/* NOTE Seccion de informacion medica */}
          <section className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Información Médica</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <div className="flex flex-col gap-6 w-full">
                  <CustomFormField
                    control={form.control}
                    name=""
                    label="Proveedor de Seguros"
                    fieldType={FormFieldType.INPUT}
                  />
                  <CustomFormField
                    label="Alergias (si tiene)"
                    control={form.control}
                    name="allergies"
                    fieldType={FormFieldType.TEXTAREA}
                  />

                  <CustomFormField
                    label="Historial Médico Familiar"
                    control={form.control}
                    name="familyMedicalHistory"
                    fieldType={FormFieldType.TEXTAREA}
                  />
                </div>

                <div className="flex flex-col gap-6 w-full">
                  <CustomFormField
                    control={form.control}
                    name="healthInsuranceNumber"
                    label="Número de Polizas de Seguro"
                    fieldType={FormFieldType.INPUT}
                  />
                  <CustomFormField
                    label="Medicaciones actuales"
                    control={form.control}
                    name="currentMedicines"
                    fieldType={FormFieldType.TEXTAREA}
                  />
                  <CustomFormField
                    label="Historial Médico Anterior"
                    control={form.control}
                    name="pastFamilyMedicalHistory"
                    fieldType={FormFieldType.TEXTAREA}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* NOTE Seccion de Identificacion y Verificacion */}
          <section className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Identificación y Verificación
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 w-full">
                <CustomFormField
                  control={form.control}
                  name="idType"
                  label="Tipo de Identificación"
                  fieldType={FormFieldType.SELECT}
                >
                  {IDTypes.map((option, i) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </CustomFormField>

                <CustomFormField
                  control={form.control}
                  name="idNumber"
                  label="Número de Identificación"
                  fieldType={FormFieldType.INPUT}
                />

                <CustomFormField
                  control={form.control}
                  name="idPhotoUrl"
                  label="Sube tu Foto de Identificación"
                  fieldType={FormFieldType.SKELETON}
                  renderSkeleton={(field) => (
                    <FormControl>
                      <FileUploader
                        files={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </div>
            </div>
          </section>

          {/* NOTE Seccion de Consentimiento y Politicas de Privacidad */}
          <section className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Consentimiento y Políticas de Privacidad
            </h3>
            <CustomFormField
              label="Consiento en recibir tratamiento para mi condición de salud"
              control={form.control}
              name="treatmentConsent"
              fieldType={FormFieldType.CHECKBOX}
              bgTransparent={true}
              borderTransparent={true}
            />
            <CustomFormField
              label="Consiento al uso y exposición de mis datos médicos por razones
                de tratamiento"
              control={form.control}
              name="disclosureConsent"
              fieldType={FormFieldType.CHECKBOX}
              bgTransparent={true}
              borderTransparent={true}
            />
            <CustomFormField
              label="Reconozco que he revisado y acuerdo a las políticas de
                privacidad"
              control={form.control}
              name="privacyConsent"
              fieldType={FormFieldType.CHECKBOX}
              bgTransparent={true}
              borderTransparent={true}
            />
          </section>

          <Button disabled={isLoading} className="bg-[#0C8EAF]" type="submit">
            {isLoading ? "Cargando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
