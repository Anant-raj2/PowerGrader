import { RequestHandler } from "express";
import UserModel from "../models/user";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;
    try{
        if(!authenticatedUserId){
            throw createHttpError(401, "User not authenticated");
        }

        const user = await UserModel.findById(authenticatedUserId).select("+email +studentId").exec();
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
};

export const getUsers: RequestHandler = async (req, res, next) => {
    try{
        const users = await UserModel.find().exec();
        res.status(200).json(users);
    }catch(error){
        next(error);
    }
}

interface SignUpBody{
    name?: string,
    email?: string,
    studentId?: string,
    password?: string,
}

export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const studentId = req.body.studentId;
    const passwordRaw = req.body.password;

    try{
        if(!name || !email || !studentId || !passwordRaw){
            throw createHttpError(400, "Parameters are missing");
        }

        const existingEmail = await UserModel.findOne({email: email}).exec();

        if(existingEmail){
            throw createHttpError(409, "Email already exists. Please choose a different email or login instead.");
        }

        const existingStudentId = await UserModel.findOne({studentId: studentId}).exec();
        if(existingStudentId){
            throw createHttpError(409, "Student ID already exists. Please choose a different student ID or login instead.");
        }

        const passwordHashed = await bcrypt.hash(passwordRaw, 10);

        const newUser = await UserModel.create({
            name: name,
            email: email,
            studentId: studentId,
            password: passwordHashed,
        });

        req.session.userId = newUser._id;

        res.status(201).json(newUser);
    }catch(error){
        next(error);
    }
}

interface LoginBody{
    studentId?: string,
    password?: string,
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const studentId = req.body.studentId;
    const password = req.body.password;

    try{
        if(!studentId || !password){
            throw createHttpError(400, "Parameters are missing");
        }

        const user = await UserModel.findOne({studentId: studentId}).select("+studentId +email +password").exec();

        if(!user){
            throw createHttpError(401, "Invalid student ID or password");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            throw createHttpError(401, "Invalid student ID or password");
        }

        req.session.userId = user._id;

        res.status(201).json(user);
    }catch(error){
        next(error);
    }    
};

export const logout: RequestHandler = async (req, res, next) => {
        req.session.destroy((error) => {
            if(error){
                next(error);
            }else{
                res.status(200).end();
            }
        });
};