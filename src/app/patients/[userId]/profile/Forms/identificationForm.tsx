import CustomFormField, {
  FormFieldType,
} from "@/components/CustomForms/FormFields/CustomFormField";
import { FileUploader } from "@/components/fileUploader";
import { FormControl } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { IDTypes } from "@/constants";

export default function IdentificationForm({ form }: { form: any }) {
  return (
    <section className="flex flex-col gap-4 mt-10">
      <h3 className="text-2xl md:text-3xl font-bold">
        Identificación y Verificación
      </h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 w-full">
          <CustomFormField
            id="identificationType"
            control={form.control}
            name="idType"
            label="Tipo de Identificación"
            fieldType={FormFieldType.SELECT}
          >
            {IDTypes.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            id="identificationNumber"
            control={form.control}
            name="idNumber"
            label="Número de Identificación"
            maxLength={15}
            fieldType={FormFieldType.INPUT}
          />

          <CustomFormField
            id="idPhotoUrl"
            control={form.control}
            name="idPhotoUrl"
            label="Sube tu Foto de Identificación"
            fieldType={FormFieldType.SKELETON}
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploader
                  id="file"
                  files={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            )}
          />
        </div>
      </div>
    </section>
  );
}
