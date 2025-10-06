import { Schema, model, Document } from "mongoose";

export interface IAstrologyParent extends Document {
    name: string;
    description?: string;
    file: string[];      
    isActive: boolean;
}

const astrologySchema = new Schema<IAstrologyParent>(
    {
        name: { type: String, required: true },
        description: String,
        file: [String],
        isActive: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default model<IAstrologyParent>("astrologyParent", astrologySchema);
