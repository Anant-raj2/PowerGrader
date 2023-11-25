import { InferSchemaType, Schema, model } from "mongoose";

const GradeSchema = new Schema({
    studentUserId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    grades: [
        {
            class: { type: String, required: true, unique: true },
            grade: { type: Number, required: true },
        },
    ],
}, { timestamps: true });

type Grade = InferSchemaType<typeof GradeSchema>;
export default model<Grade>("Grade", GradeSchema);
