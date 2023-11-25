import * as yup from 'yup';

const nameSchema = yup.string()
    .max(20);

const emailSchema = yup.string().email();

const studentIdSchema = yup.string().min(6).max(6);

const passwordSchema = yup.string().min(6).max(20);

export const signUpSchema = yup.object({
    body: yup.object({
        name: nameSchema.required(),
        email: emailSchema.required(),
        studentId: studentIdSchema.required(),
        password: passwordSchema.required(),
        verificationCode: yup.string().required(),
    }),
});

export type SignUpBody = yup.InferType<typeof signUpSchema>["body"];

export const loginSchema = yup.object({
    body: yup.object({
        studentId: studentIdSchema.required(),
        password: passwordSchema.required(),
    }),
});

export type LoginBody = yup.InferType<typeof signUpSchema>["body"];

export const requestVerificationCodeSchema = yup.object({
    body: yup.object({
        email: emailSchema.required(),
    }),
});

export type RequestVerificationCodeBody = yup.InferType<typeof requestVerificationCodeSchema>["body"];