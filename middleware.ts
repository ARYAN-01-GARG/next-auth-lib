import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
  apiRoutePrefix,
  authRoutes,
 } from "./routes";
const { auth } = NextAuth(authConfig);

export default auth(async function middleware( req ){
  const { nextUrl } = req;

  console.log("nextUrl", nextUrl);

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiRoutePrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute){
    return undefined;
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT , nextUrl));
    }
    return undefined;
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL('/auth/login', nextUrl));
  }

  return undefined;
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
    };