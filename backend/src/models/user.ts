import {InferSchemaType, Schema, model} from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gradeLevel: { type: Number },
  weightedGPA: { type: Number },
  unWeightedGPA: { type: Number },
  rating: { type: String },
  bestClasses: [
    {
      class: { type: String },
    }
  ],
  worstClasses: [
    {
      class: { type: String },
    }
  ],
  classes: [
    {
        class: { type: String, required: true },
        credit: { type: Number, required: true },
        grade: { type: String, required: true },
        type: { type: String, required: true },
    },
],
}, {timestamps: true});

type User = InferSchemaType<typeof UserSchema>;
export default model<User>("User", UserSchema);
