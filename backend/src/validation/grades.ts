import * as yup from 'yup';

const classSchema = yup.string().max(30).min(3);
const gradeSchema = yup.number().positive().integer().max(4);

export const createGradeSchema = yup.object({
    body: yup.object({
        class1: classSchema.required(),
        grade1: gradeSchema.required(),

        class2: classSchema.required(),
        grade2: gradeSchema.required(),

        class3: classSchema.required(),
        grade3: gradeSchema.required(),

        class4: classSchema.required(),
        grade4: gradeSchema.required(),

        class5: classSchema.required(),
        grade5: gradeSchema.required(),

        class6: classSchema.required(),
        grade6: gradeSchema.required(),

        class7: classSchema.required(),
        grade7: gradeSchema.required(),

        class8: classSchema.required(),
        grade8: gradeSchema.required(),
    }),
});

export type CreateGradeBody = yup.InferType<typeof createGradeSchema>["body"];