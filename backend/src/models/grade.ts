import {InferSchemaType, Schema, model} from "mongoose";

const GradeSchema = new Schema({
    grade1: {type: Number, required: true},
    grade2: {type: Number, required: true},
    grade3: {type: Number, required: true},
    grade4: {type: Number, required: true},
    grade5: {type: Number, required: true},
    grade6: {type: Number, required: true},
    grade7: {type: Number, required: true},
    grade8: {type: Number, required: true},
}, {timestamps: true});

type Grade = InferSchemaType<typeof GradeSchema>;
export default model<Grade>("Grade", GradeSchema);
