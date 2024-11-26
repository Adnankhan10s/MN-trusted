import { NextRequest , NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Blog } from "@/models/Blog";
import cloudinary from "@/lib/cloudinary";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";


export  async function POST(req:NextRequest ){
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error:"Unauthorized"}, {status:402});
    }
    try{
        const body = await req.json();
        await dbConnect();
        const newBlog = new Blog(body);
        await newBlog.save();
        console.log(newBlog)
        return NextResponse.json({message:"Blog Uploaded"} , {status:201});
    }catch(error){
        console.error('Error creating blog:',error);
        return NextResponse.json({error:'Failed to Create Blog'},{status:400});

    }
}

export  async function GET (req:NextRequest, res:NextResponse){
       

    try {
        await dbConnect();
        const blogs = await Blog.find({}) ;
        return NextResponse.json(blogs , {status:200});
   
    } catch (error) {
        console.error("Error While Fetching Data", error);
        return NextResponse.json({error:'Failed to Get Blogs'}, {status:401})
    }

}

export async function DELETE(req:NextRequest){
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error:"Unauthorized"}, {status:402});
    }
   try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if(!id)return NextResponse.json({error:'Blog Not Found'},{status:404});
    await dbConnect();
    const blog = await Blog.findByIdAndDelete(id);
    const publicId = blog.imageUrl.split('/').pop()?.split('.')[0];
    await cloudinary.uploader.destroy(publicId);
    return NextResponse.json({message:'Blog Deleted'},{status:201});
    
   } catch (error) {
    console.log(error);
    return NextResponse.json({message:'Internal error'}, {status:400});
   }
}