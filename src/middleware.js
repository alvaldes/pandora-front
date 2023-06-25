import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  const cookie = request.cookies.get('pandoraToken')?.value;
  const path = request.nextUrl.pathname;

  if (!request.cookies.has('pandoraToken')) {
    //validar que el jwt sea valido
    //return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/inicio/:path*', '/'],
};
