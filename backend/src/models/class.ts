import {InferSchemaType, Schema, model} from "mongoose";

const ClassSchema = new Schema({
    class1: {type: String, required: true},
    class2: {type: String, required: true},
    class3: {type: String, required: true},
    class4: {type: String, required: true},
    class5: {type: String, required: true},
    class6: {type: String, required: true},
    class7: {type: String, required: true},
    class8: {type: String, required: true},
}, {timestamps: true});

type Class = InferSchemaType<typeof ClassSchema>;
export default model<Class>("Classe", ClassSchema);
