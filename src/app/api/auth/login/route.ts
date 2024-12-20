import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/validator/authSchema";
import vine, { errors } from "@vinejs/vine";
import ErrorReporter from "@/validator/ErrorReporter";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";


export async function POST(request:NextRequest){
try {
    const body = await request.json();
    await dbConnect();
    const validator = vine.compile(loginSchema);
    validator.errorReporter = () => new ErrorReporter();
    const output = await validator.validate(body);
    const user = await User.findOne({email:output.email});
    if(user){
        const checkPassword = bcrypt.compareSync(output.password! , user.password)
        if(checkPassword){
            return NextResponse.json({status:200 , message:"User Logged In"},{status:200});

        }
        return NextResponse.json({status:400 , message:"Please Check Your credentials"},{status:200});


    }
    return NextResponse.json({status:400 , errors:{
        email:"No Account Found with this email."
    }})
} catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
        return NextResponse.json({ status: 400, errors: error.messages }, { status: 200 })
    }
}

}