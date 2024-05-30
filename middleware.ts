import { authMiddleware } from "@clerk/nextjs/server";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/api/webhook/clerk"],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};