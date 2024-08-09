declare type Gender = "Hombre" | "Mujer" | "Otro";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

declare interface User extends CreateUserParams {
  $id: string;
}
