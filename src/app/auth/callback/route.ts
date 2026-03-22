import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const redirectTo = request.nextUrl.origin;

  if (code) {
    const cookieStore = await cookies();
    const response = NextResponse.redirect(redirectTo);
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: (
            toSet: { name: string; value: string; options?: Record<string, any> }[]
          ) =>
            toSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            ),
        },
      }
    );
    await supabase.auth.exchangeCodeForSession(code);
    return response;
  }

  return NextResponse.redirect(redirectTo);
}
