import NextAuth from 'next-auth';
// Way to tell which provider we are using
import Providers from 'next-auth/providers';

// configuration
const options = {
  providers: [
    Providers.GitHub({
      clientId: 'test',
      clientSecret: 'test2',
    }),
    Providers.Twitter({
      clientId: 'test',
      clientSecret: 'test2',
    }),
  ],
};
