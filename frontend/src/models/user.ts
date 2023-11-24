export interface User {
  name: { type: String; required: true };
  email: { type: String; required: true; select: false; unique: true };
  studentId: { type: String; required: true; select: false; unique: true };
  password: { type: String; required: true; select: false };
}
