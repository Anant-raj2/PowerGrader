import { RequestHandler } from "express";
import UserModel from "../models/user";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import EmailVerificationToken from "../models/email-verification-token";
import * as Email from "../util/email";
import crypto from "crypto";
import {
  SignUpBody,
  LoginBody,
  RequestVerificationCodeBody,
} from "../validation/users";
import { CreateGradeBody } from "../validation/grades";

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  try {
    if (!authenticatedUserId) {
      throw createHttpError(401, "User not authenticated");
    }

    const user = await UserModel.findById(authenticatedUserId)
      .select("+email+createdAt+classes+gradeLevel")
      .exec();
    if (user!.classes.length === 0) {
      throw createHttpError(400, "User has not posted any grades");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find().exec();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const passwordRaw = req.body.password;
  const verificationCode = req.body.verificationCode;
  try {
    if (!name || !email || !passwordRaw || !verificationCode) {
      throw createHttpError(400, "Parameters are missing");
    }
    const existingEmail = await UserModel.findOne({ email: email }).exec();

    if (existingEmail) {
      throw createHttpError(
        409,
        "Email already exists. Please choose a different email or login instead.",
      );
    }

    const emailVerificationToken = await EmailVerificationToken.findOne({
      email,
      verificationCode,
    }).exec();

    if (!emailVerificationToken) {
      throw createHttpError(400, "Verification code incorrect or expired.");
    } else {
      await emailVerificationToken.deleteOne();
    }
    const passwordHashed = await bcrypt.hash(passwordRaw, 10);

    const newUser = await UserModel.create({
      name: name,
      email: email,
      password: passwordHashed,
    });

    req.session.userId = newUser._id;

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw createHttpError(400, "Parameters are missing");
    }

    const user = await UserModel.findOne({ email: email })
      .select("+email +password")
      .exec();

    if (!user) {
      throw createHttpError(401, "Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw createHttpError(401, "Invalid email or password");
    }

    req.session.userId = user._id;
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.status(200).end();
    }
  });
};

export const requestVerificationCode: RequestHandler<
  unknown,
  unknown,
  RequestVerificationCodeBody,
  unknown
> = async (req, res, next) => {
  const email = req.body.email;
  try {
    const existingEmail = await UserModel.findOne({ email: email }).exec();
    if (existingEmail) {
      throw createHttpError(
        409,
        "Email is already registered, please log in instead",
      );
    }
    const verificationCode = crypto.randomInt(100000, 999999);
    await EmailVerificationToken.create({ email, verificationCode });
    await Email.sendVerificationEmail(email, verificationCode.toString());

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

function gradeToNumber(grade: string): number {
  switch (grade) {
    case "A+":
      return 4.33;
    case "A":
      return 4.0;
    case "A-":
      return 3.67;
    case "B+":
      return 3.33;
    case "B":
      return 3.0;
    case "B-":
      return 2.67;
    case "C+":
      return 2.33;
    case "C":
      return 2.0;
    case "C-":
      return 1.67;
    case "D+":
      return 1.33;
    case "D":
      return 1.0;
    case "D-":
      return 0.67;
    case "F":
      return 0.0;
    default:
      throw 0.0;
  }
}

export const postAcademics: RequestHandler<
  unknown,
  unknown,
  CreateGradeBody,
  unknown
> = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;
  const gradeLevel = req.body.gradeLevel;
  let totalCredits = 0;
  const class1 = req.body.class1;
  const credit1 = req.body.credit1;
  const grade1 = req.body.grade1;
  const type1 = req.body.type1;

  const class2 = req.body.class2;
  const credit2 = req.body.credit2;
  const grade2 = req.body.grade2;
  const type2 = req.body.type2;

  const class3 = req.body.class3;
  const credit3 = req.body.credit3;
  const grade3 = req.body.grade3;
  const type3 = req.body.type3;

  const class4 = req.body.class4;
  const credit4 = req.body.credit4;
  const grade4 = req.body.grade4;
  const type4 = req.body.type4;

  const class5 = req.body.class5;
  const credit5 = req.body.credit5;
  const grade5 = req.body.grade5;
  const type5 = req.body.type5;

  const class6 = req.body.class6;
  const credit6 = req.body.credit6;
  const grade6 = req.body.grade6;
  const type6 = req.body.type6;

  const class7 = req.body.class7;
  const credit7 = req.body.credit7;
  const grade7 = req.body.grade7;
  const type7 = req.body.type7;

  const class8 = req.body.class8;
  const credit8 = req.body.credit8;
  const grade8 = req.body.grade8;
  const type8 = req.body.type8;

  const newClasses = [
    { class: class1, credit: credit1, grade: grade1, type: type1 },
    { class: class2, credit: credit2, grade: grade2, type: type2 },
    { class: class3, credit: credit3, grade: grade3, type: type3 },
    { class: class4, credit: credit4, grade: grade4, type: type4 },
    { class: class5, credit: credit5, grade: grade5, type: type5 },
    { class: class6, credit: credit6, grade: grade6, type: type6 },
    { class: class7, credit: credit7, grade: grade7, type: type7 },
    { class: class8, credit: credit8, grade: grade8, type: type8 },
  ];
  try {
    if (!authenticatedUserId) {
      throw createHttpError(401, "User not authenticated");
    }
    if (!gradeLevel) {
      throw createHttpError(400, "Grade level is missing");
    }
    if (
      !class1 ||
      !class2 ||
      !class3 ||
      !class4 ||
      !class5 ||
      !class6 ||
      !class7 ||
      !class8
    ) {
      throw createHttpError(400, "Classes are missing");
    }
    if (
      !credit1 ||
      !credit2 ||
      !credit3 ||
      !credit4 ||
      !credit5 ||
      !credit6 ||
      !credit7 ||
      !credit8
    ) {
      throw createHttpError(400, "Credits are missing");
    }
    if (
      !grade1 ||
      !grade2 ||
      !grade3 ||
      !grade4 ||
      !grade5 ||
      !grade6 ||
      !grade7 ||
      !grade8
    ) {
      throw createHttpError(400, "Grades are missing");
    }

    let weightedGPA = 0;
    let unWeightedGPA = 0;
    const rating = "";
    for (let i = 0; i < newClasses.length; i++) {
      switch (newClasses[i].grade) {
        case "A":
          unWeightedGPA += 4 * newClasses[i].credit;
          break;
        case "A-":
          unWeightedGPA += 3.67 * newClasses[i].credit;
          break;
        case "B+":
          unWeightedGPA += 3.33 * newClasses[i].credit;
          break;
        case "B":
          unWeightedGPA += 3.0 * newClasses[i].credit;
          break;
        case "B-":
          unWeightedGPA += 2.67 * newClasses[i].credit;
          break;
        case "C+":
          unWeightedGPA += 2.33 * newClasses[i].credit;
          break;
        case "C":
          unWeightedGPA += 2.0 * newClasses[i].credit;
          break;
        case "C-":
          unWeightedGPA += 1.67 * newClasses[i].credit;
          break;
        case "D+":
          unWeightedGPA += 1.33 * newClasses[i].credit;
          break;
        case "D":
          unWeightedGPA += 1.0 * newClasses[i].credit;
          break;
        case "D-":
          unWeightedGPA += 0.67 * newClasses[i].credit;
          break;
        case "F":
          unWeightedGPA += 0.0 * newClasses[i].credit;
          break;
        default:
          throw createHttpError(400, "Invalid grade");
      }
      totalCredits += newClasses[i].credit;
      newClasses.sort(
        (a, b) => gradeToNumber(b.grade) - gradeToNumber(a.grade),
      );
      if (
        newClasses[i].type === "Weighted" &&
        newClasses[i].grade !== "F" &&
        newClasses[i].grade !== "D-" &&
        newClasses[i].grade !== "D" &&
        newClasses[i].grade !== "D+"
      ) {
        weightedGPA += 0.1 * newClasses[i].credit;
      }
    }
    unWeightedGPA /= totalCredits;

    const worstClasses = newClasses.slice(-3);
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: authenticatedUserId },
      {
        $set: {
          classes: newClasses,
          gradeLevel,
          unWeightedGPA,
          weightedGPA: unWeightedGPA + weightedGPA,
          rating,
          worstClasses: worstClasses,
        },
      },
      { new: true },
    ).exec();
    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const loginGoogle: RequestHandler = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  try {
    if (!email || !name) {
      throw createHttpError(400, "Parameters are missing");
    }

    const user = await UserModel.findOne({ email: email })
      .select("+email")
      .exec();

    if (!user) {
      throw createHttpError(
        409,
        "No Account exists with this email. Please sign up instead.",
      );
    }

    req.session.userId = user._id;

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
