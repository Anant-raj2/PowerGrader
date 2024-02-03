import * as yup from "yup";

const classSchema = yup.string().max(30).min(3);
const creditSchema = yup.number().max(2).min(0);
const gradeSchema = yup.string().max(2, "Grade must be in correct format!");
const gradeLevelSchema = yup.number().positive().max(12);
const typeSchema = yup.string().max(30).min(2);

export const createGradeSchema = yup.object({
  body: yup.object({
    gradeLevel: gradeLevelSchema.required(),

    class1: classSchema.required(),
    credit1: creditSchema.required(),
    grade1: gradeSchema.required(),
    type1: typeSchema.required(),

    class2: classSchema.required(),
    credit2: creditSchema.required(),
    grade2: gradeSchema.required(),
    type2: typeSchema.required(),

    class3: classSchema.required(),
    credit3: creditSchema.required(),
    grade3: gradeSchema.required(),
    type3: typeSchema.required(),

    class4: classSchema.required(),
    credit4: creditSchema.required(),
    grade4: gradeSchema.required(),
    type4: typeSchema.required(),

    class5: classSchema.required(),
    credit5: creditSchema.required(),
    grade5: gradeSchema.required(),
    type5: typeSchema.required(),

    class6: classSchema.required(),
    credit6: creditSchema.required(),
    grade6: gradeSchema.required(),
    type6: typeSchema.required(),

    class7: classSchema.required(),
    credit7: creditSchema.required(),
    grade7: gradeSchema.required(),
    type7: typeSchema.required(),

    class8: classSchema.required(),
    credit8: creditSchema.required(),
    grade8: gradeSchema.required(),
    type8: typeSchema.required(),
  }),
});

export type CreateGradeBody = yup.InferType<typeof createGradeSchema>["body"];
