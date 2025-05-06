import * as z from "zod";
import {
  nameRegex,
  phoneNumberRegex,
  regexNumbersOnly,
  usernameRegex,
} from "./regex";

export const UserSchema = z.object({
  email: z
    .string()
    .min(1, "Email Harus diisi")
    .email()
    .refine(() => true, { message: "Email Harus diisi" }),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .max(50, "Password maksimal 50 karakter"),
  name: z
    .string()
    .min(5, nameRegex.msg.min)
    .max(50, nameRegex.msg.max)
    .regex(nameRegex.regex, "Nama harus berupa huruf"),
  username: z
    .string()
    .min(5, nameRegex.msg.min)
    .max(15, "Maximum 15 characters")
    .regex(usernameRegex.regex, usernameRegex.msg),
  hobby: z.string().min(1, "Hobby Harus diisi"),
});

export const ProfileSchema = z.object({
  email: z
    .string({ required_error: "Email Harus diisi" })
    .email()
    .refine(() => true, { message: "Email Harus diisi" }),
  phone: z
    .string({ required_error: "No HP Harus diisi" })
    .regex(regexNumbersOnly.regex, regexNumbersOnly.msg)
    .min(10, phoneNumberRegex.msg.min)
    .max(13, phoneNumberRegex.msg.max),
  codeVerify: z.string().max(6).optional(),
  name: z
    .string({ required_error: "Nama Harus diisi" })
    .min(5, nameRegex.msg.min)
    .max(50, nameRegex.msg.max)
    .regex(nameRegex.regex, "Nama harus berupa huruf"),
  username: z
    .string({ required_error: "Username Harus diisi" })
    .min(5, nameRegex.msg.min)
    .max(50, nameRegex.msg.max)
    .regex(usernameRegex.regex, usernameRegex.msg),
});

export const SelectScheme = z.object({
  options: z.string(),
});
