import CustomFormField, {
  FormFieldType,
} from "@/components/CustomForms/FormFields/CustomFormField";

export default function MedicalForm({ form }: { form: any }) {
  return (
    <section className="flex flex-col gap-4 mt-10">
      <h3 className="text-2xl md:text-3xl font-bold">Información Médica</h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-6 w-full">
            <CustomFormField
              id="healthInsuranceProvider"
              control={form.control}
              name=""
              label="Proveedor de Seguros"
              fieldType={FormFieldType.INPUT}
            />
            <CustomFormField
              id="allergies"
              label="Alergias (si tiene)"
              control={form.control}
              name="allergies"
              fieldType={FormFieldType.TEXTAREA}
            />

            <CustomFormField
              id="familyMedicalHistory"
              label="Historial Médico Familiar"
              control={form.control}
              name="familyMedicalHistory"
              fieldType={FormFieldType.TEXTAREA}
            />
          </div>

          <div className="flex flex-col gap-6 w-full">
            <CustomFormField
              id="healthInsuranceNumber"
              control={form.control}
              name="healthInsuranceNumber"
              label="Número de Polizas de Seguro"
              fieldType={FormFieldType.INPUT}
            />
            <CustomFormField
              id="currentMedicines"
              label="Medicaciones actuales"
              control={form.control}
              name="currentMedicines"
              fieldType={FormFieldType.TEXTAREA}
            />
            <CustomFormField
              id="pastFamilyMedicalHistory"
              label="Historial Médico Anterior"
              control={form.control}
              name="pastFamilyMedicalHistory"
              fieldType={FormFieldType.TEXTAREA}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
