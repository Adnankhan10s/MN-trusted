import mongoose,{Schema, Document} from "mongoose";

interface Blog extends Document {
    
    title:string;
    description:string;
    imageUrl:string;
    category:string;
    createdAt:Date;
}

const BlogSchema = new Schema <Blog>({
    title:{type:String,required:true},
    description:{type:String, required:true},
    imageUrl:{type:String, required:true},
    category:{type:String, required:true},
    createdAt:{type:Date , default: Date.now},
});

export const Blog = mongoose.models.Blog || mongoose.model<Blog>('Blog',BlogSchema);