"use client";

import { Patient } from "@/types/appwrite.types";
import { Models } from "node-appwrite";
import { createContext, useContext, useState } from "react";

type CustomUser = Models.User<Models.Preferences>;

interface UserContextType {
  user: CustomUser | undefined;
  patient: Patient | undefined;
}

const UserContext = createContext<UserContextType>({
  user: undefined,
  patient: undefined,
});

export const UserProvider = ({
  children,
  initialUser,
  initialPatient,
}: {
  children: React.ReactNode;
  initialUser: CustomUser | undefined;
  initialPatient: Patient | undefined;
}) => {
  const [user] = useState<CustomUser | undefined>(initialUser);
  const [patient] = useState<Patient | undefined>(initialPatient);

  return (
    <UserContext.Provider value={{ user, patient }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext<UserContextType>(UserContext);
