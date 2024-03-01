import { object, string } from "yup";

export const loginSchema = object().shape({
  email: string()
    .required("El Email es requerido")
    .email("No es un email válido"),
  password: string().required("La contraseña es requerida"),
});
