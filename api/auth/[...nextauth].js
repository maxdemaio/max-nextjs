import NextAuth from 'next-auth';
// Way to tell which provider we are using
import Providers from 'next-auth/providers';

// configuration
const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
