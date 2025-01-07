import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (file: File[]) => void;
  id: string;
};

export function FileUploader({ id, files, onChange }: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="p-10 w-full text-center bg-[#181D30] hover:bg-[#1b1f35] border border-dashed border-[#2C3558] hover:border-[#47548a] transition-colors cursor-pointer"
    >
      <input id={id} {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="Imagen del archivo subido"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/ep_upload.svg"
            width={40}
            height={40}
            alt="Imagen del icono de subida de archivos"
            className="mx-auto"
          />
          <div className="">
            <p className="">
              Haz click aquí para subir un archivo{" "}
              <span>o arrastra un archivo</span>
            </p>
            <small className="text-slate-500">
              <strong>SVG, PNG, JPG</strong> (max. 800x400px)
            </small>
          </div>
        </>
      )}
    </div>
  );
}
