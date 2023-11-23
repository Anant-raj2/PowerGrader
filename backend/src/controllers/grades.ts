import { RequestHandler } from "express";
import GradeModel from "../models/grade";
import createHttpError from "http-errors";

interface GradeBody{
    grade1?: number,
    grade2?: number,
    grade3?: number,
    grade4?: number,
    grade5?: number,
    grade6?: number,
    grade7?: number,
    grade8?: number,
}
export const postGrades: RequestHandler<unknown, unknown, GradeBody, unknown> = async (req, res, next) => {
    const grade1 = req.body.grade1;
    const grade2 = req.body.grade2;
    const grade3 = req.body.grade3;
    const grade4 = req.body.grade4;
    const grade5 = req.body.grade5;
    const grade6 = req.body.grade6;
    const grade7 = req.body.grade7;
    const grade8 = req.body.grade8;

    try{
        if(!grade1 || !grade2 || !grade3 || !grade4 || !grade5 || !grade6 || !grade7 || !grade8){
            throw createHttpError(400, "Parameters are missing");
        }

        const newGrade = await GradeModel.create({
            grade1: grade1,
            grade2: grade2,
            grade3: grade3,
            grade4: grade4,
            grade5: grade5,
            grade6: grade6,
            grade7: grade7,
            grade8: grade8,
        });

        res.status(201).json(newGrade);
    }catch(error){
        next(error);
    }
}

export const getGrades: RequestHandler = async (req, res, next) => {
    try{
        const grades = await GradeModel.find();
        res.json(grades);
    }catch(error){
        next(error);
    }
}