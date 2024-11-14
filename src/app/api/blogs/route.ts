import { NextRequest , NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Blog } from "@/models/Blog";


export async function POST(req:NextRequest ){
    try{
        const body = await req.json();
        await dbConnect();
        const newBlog = new Blog(body);
        await newBlog.save();
        console.log(newBlog)
        return NextResponse.json(newBlog , {status:201});
    }catch(error){
        console.error('Error creating blog:',error);
        return NextResponse.json({error:'Failed to Create Blog'},{status:400});

    }
}

export async function GET (req:NextRequest , res: NextResponse){
    try {
        await dbConnect();
        const blogs = await Blog.find({}) ;
        return NextResponse.json(blogs , {status:200});
    } catch (error) {
        console.error("Error While Fetching Data", error);
        return NextResponse.json({error:'Failed to Get Blogs'}, {status:401})
    }

}