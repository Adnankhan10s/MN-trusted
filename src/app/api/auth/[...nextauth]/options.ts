import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";

export const authOptions: AuthOptions = {
    pages:{
        signIn:"/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter Your Email"
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            async authorize(credentials, req) {
               dbConnect();
               const user = await User.findOne({email:credentials?.email});
               
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ]

}