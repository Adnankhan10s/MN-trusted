import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';
 
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret:process.env.NEXTAUTH_SECRET});
    const protectedRoutes=["/api/blogs/**"];
    if (protectedRoutes.some(route=>req.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            return NextResponse.json({error:"Unauthorized"},{status:402});
        }
    }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/:path*'],
}