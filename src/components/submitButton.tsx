import React from "react";
import { Button } from "./ui/button";

type SubmitButtonProps = {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function SubmitButton({
  isLoading,
  children,
  className,
}: SubmitButtonProps) {
  return (
    <Button type="submit" className={className} disabled={isLoading}>
      {isLoading ? "Cargando..." : children}
    </Button>
  );
}
