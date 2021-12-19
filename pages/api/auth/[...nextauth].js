import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// https://next-auth.js.org/configuration/options
export default NextAuth({
  secret: process.env.SECRET,
  // https://next-auth.js.org/configuration/providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // Enable debug messages in the console if you are having problems
  debug: true,
});
