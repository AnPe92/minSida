// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"

// export default NextAuth({
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET,
//         }),
//         // Add other providers here
//     ],
//     // Add any additional configurations, like a database or callbacks, here
// });
