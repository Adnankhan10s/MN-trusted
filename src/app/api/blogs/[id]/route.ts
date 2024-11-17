import dbConnect from "@/lib/dbConnect";
import { Blog } from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      await dbConnect();
      const blog = await Blog.findById(params.id);
      if (!blog) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json(blog);
    } catch (error) {
      return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
  }