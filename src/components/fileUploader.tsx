import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (file: File) => void;
};

export function FileUploader({ files, onChange }: FileUploaderProps) {
  const onDropHandler = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDropHandler });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="Imagen del archivo subido"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/ep_upload.svg"
            width={40}
            height={40}
            alt="Imagen del icono de subida de archivos"
          />
          <div>
            <p className="">
              Haz click aquí para subir un archivo{" "}
              <span>o arrastra un archivo</span>
            </p>
            <p>SVG, PNG, JPG (max. 800x400px)</p>
          </div>
        </>
      )}
    </div>
  );
}
