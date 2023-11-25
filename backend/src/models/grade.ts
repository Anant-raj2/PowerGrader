import { InferSchemaType, Schema, model } from "mongoose";

const GradeSchema = new Schema({
    studentUserId: { type: String, required: true, unique: true },
    studentId: { type: String, required: true, unique: true },
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

// const GradeSchema = new Schema({
//     student: {type: String, required: true, unique: true},

//     class1: {type: String, required: true, unique: true},
//     grade1: {type: Number, required: true},

//     class2: {type: String, required: true, unique: true},
//     grade2: {type: Number, required: true},

//     class3: {type: String, required: true, unique: true},
//     grade3: {type: Number, required: true},

//     class4: {type: String, required: true, unique: true},
//     grade4: {type: Number, required: true},

//     class5: {type: String, required: true, unique: true},
//     grade5: {type: Number, required: true},

//     class6: {type: String, required: true, unique: true},
//     grade6: {type: Number, required: true},

//     class7: {type: String, required: true, unique: true},
//     grade7: {type: Number, required: true},

//     class8: {type: String, required: true, unique: true},
//     grade8: {type: Number, required: true},
// }, {timestamps: true});

// type Grade = InferSchemaType<typeof GradeSchema>;
// export default model<Grade>("Grade", GradeSchema);
