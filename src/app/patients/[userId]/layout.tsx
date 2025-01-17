import { UserProvider } from "@/context/UserContext";
import Topbar from "@/components/topbar";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

export default async function PatientsLayout({
  params: { userId },
  children,
}: {
  params: SearchParamProps;
  children: React.ReactNode;
}) {
  const user = await getUser(userId);

  let patient;
  if (await getPatient(userId)) {
    patient = await getPatient(userId);
  }

  return (
    <UserProvider initialUser={user} initialPatient={patient}>
      <div className="w-full">
        <Topbar />
        {children}
      </div>
    </UserProvider>
  );
}
