import { RequestHandler } from "express";
import GradeModel from "../models/grade";
import createHttpError from "http-errors";
import UserModel from "../models/user";
import { CreateGradeBody } from "../validation/grades";


export const postAcademics: RequestHandler<unknown, unknown, CreateGradeBody, unknown> = async (req, res, next) => {
    const studentUserId = req.session.userId;
    


    const class1 = req.body.class1;
    const grade1 = req.body.grade1;

    const class2 = req.body.class2;
    const grade2 = req.body.grade2;

    const class3 = req.body.class3;
    const grade3 = req.body.grade3;

    const class4 = req.body.class4;
    const grade4 = req.body.grade4;

    const class5 = req.body.class5;
    const grade5 = req.body.grade5;

    const class6 = req.body.class6;
    const grade6 = req.body.grade6;

    const class7 = req.body.class7;
    const grade7 = req.body.grade7;

    const class8 = req.body.class8;
    const grade8 = req.body.grade8;

    try{
        if(!studentUserId){
            throw createHttpError(401, "User not authenticated");
        }
        const user = await UserModel.findOne({_id: studentUserId}).select("+studentId +email").exec();

        if(!user){
            throw createHttpError(404, "User not found");
        }
        const studentId = user.studentId;
        const name = user.name;
        
        if(!grade1 || !class1 || !grade2 || !class2 || !grade3 || !class3 || !grade4 || !class4 || !grade5 || !class5 || !grade6 || !class6 || !grade7 || !class7 || !grade8 || !class8){
            throw createHttpError(400, "Parameters are missing");
        }
        const existingStudent = await GradeModel.findOne({studentUserId: studentUserId}).exec();
        if(existingStudent){
            throw createHttpError(409, "Student already exists");
        }
        const newGrade = await GradeModel.create({
            studentUserId: studentUserId,
            studentId: studentId,
            name: name,
            grades: [
                {
                    class: class1,
                    grade: grade1,
                },
                {
                    class: class2,
                    grade: grade2,
                },
                {
                    class: class3,
                    grade: grade3,
                },
                {
                    class: class4,
                    grade: grade4,
                },
                {
                    class: class5,
                    grade: grade5,
                },
                {
                    class: class6,
                    grade: grade6,
                },
                {
                    class: class7,
                    grade: grade7,
                },
                {
                    class: class8,
                    grade: grade8,
                }
            ]
        });


        res.status(201).json(newGrade);
    }catch(error){
        next(error);
    }
}

export const getAcademics: RequestHandler = async (req, res, next) => {
    try{
        const academics = await GradeModel.find();
        res.json(academics);
    }catch(error){
        next(error);
    }
}

// export const getStudentInfoById: RequestHandler = async (req, res, next) => {
//     const studentUserId = await UserModel.findOne({_id: req.session.userId}).select("+studentId +email").exec();
//     try{
//         if(!studentUserId){
//             throw createHttpError(404, "Student not found");
//         }
//         console.log(studentUserId.studentId)
//         res.status(201).json(studentUserId);
//     }catch(error){
//         next(error);
//     }
// }