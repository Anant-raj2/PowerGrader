import { RequestHandler } from "express";
import ClassModel from "../models/class";
import createHttpError from "http-errors";

interface ClassBody{
    class1?: string,
    class2?: string,
    class3?: string,
    class4?: string,
    class5?: string,
    class6?: string,
    class7?: string,
    class8?: string,
}
export const postClasses: RequestHandler<unknown, unknown, ClassBody, unknown> = async (req, res, next) => {
    const class1 = req.body.class1;
    const class2 = req.body.class2;
    const class3 = req.body.class3;
    const class4 = req.body.class4;
    const class5 = req.body.class5;
    const class6 = req.body.class6;
    const class7 = req.body.class7;
    const class8 = req.body.class8;

    try{
        if(!class1 || !class2 || !class3 || !class4 || !class5 || !class6 || !class7 || !class8){
            throw createHttpError(400, "Parameters are missing");
        }

        const newClass = await ClassModel.create({
            class1: class1,
            class2: class2,
            class3: class3,
            class4: class4,
            class5: class5,
            class6: class6,
            class7: class7,
            class8: class8,
        });

        res.status(201).json(newClass);
    }catch(error){
        next(error);
    }
}