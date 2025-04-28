import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Retrieve the Supabase URL and Key from environment variables
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Resolve the cookies from the request headers
    const cookieStore = await cookies();

    // Create the Supabase client with resolved cookies
    const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        cookies: cookieStore,
    });

    // Get the session
    const { data: { session } } = await supabase.auth.getSession();

    console.log(session);

    if (!session) {
        // Redirect to login if no session exists
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    return res;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
