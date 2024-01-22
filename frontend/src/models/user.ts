export interface User {
  name: string;
  email: string;
  createdAt: string;
  gradeLevel: number;
  weightedGPA: number;
  unWeightedGPA: number;
  worstClasses: [];
  bestClasses: [];
  classes: [];
}
