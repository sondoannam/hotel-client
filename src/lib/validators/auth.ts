import { z } from 'zod';

export const RegexValidation = {
  phone: /^(\+84|0)\d{9,10}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const loginSchema = z.object({
  emailOrPhone: z
    .string({
      required_error: 'auth.required.email_or_phone',
    })
    .refine(
      (value) => {
        return RegexValidation.phone.test(value) || RegexValidation.email.test(value);
      },
      {
        message: 'auth.validate.email_or_phone',
      },
    ),
  password: z
    .string()
    .min(8, { message: 'auth.validate.password_min_length' })
    .regex(/[A-Z]/, { message: 'auth.validate.password_uppercase' })
    .regex(/[a-z]/, { message: 'auth.validate.password_lowercase' })
    .regex(/\d/, { message: 'auth.validate.password_digit' })
    .regex(/[^A-Za-z0-9]/, { message: 'auth.validate.password_special' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    ...loginSchema.shape,
    confirmPassword: z.string({
      required_error: 'auth.required.confirm_password',
    }),
    name: z.string({
      required_error: 'auth.required.name',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'auth.validate.password_match',
    path: ['confirmPassword'], // path of error
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const activeAccountSchema = z.object({
  otp: z.string().min(6, {
    message: 'auth.required.otp',
  }),
});

export type ActiveAccountFormValues = z.infer<typeof activeAccountSchema>;


export const emailSchema = z.object({
  email: z.string().email(),
  
});
export type EmailValue = z.infer<typeof emailSchema>;

export const emailandCodeSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(6, {
    message: 'auth.required.otp',
  }),
});
export type EmailandCodeValue = z.infer<typeof emailandCodeSchema>;

export const newPasswordchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: 'auth.validate.password_min_length' })
    .regex(/[A-Z]/, { message: 'auth.validate.password_uppercase' })
    .regex(/[a-z]/, { message: 'auth.validate.password_lowercase' })
    .regex(/\d/, { message: 'auth.validate.password_digit' })
    .regex(/[^A-Za-z0-9]/, { message: 'auth.validate.password_special' }),
});
export type newPasswordValue = z.infer<typeof newPasswordchema>;
