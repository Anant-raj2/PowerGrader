import { Schema, Document, model } from 'mongoose';

interface IClass {
  name: string;
  credits: number;
  grade: string;
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  classes: IClass[];
}

const ClassSchema: Schema = new Schema({
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  grade: { type: Number, required: true }
});

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classes: [ClassSchema]
});

const User = model<IUser>('User', UserSchema);

export default User;