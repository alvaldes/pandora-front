import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const res = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          user.name = username;
          return user;
        } else return null;
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 1,
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 1,
  },

  callbacks: {
    async jwt({ token, user }) {
      // console.log({ token });
      // console.log({ user });
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // console.log({ session });
      // console.log({ token });
      // console.log({ user });
      session.accessToken = token.accessToken;

      return session;
    },
  },

  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
    error: '/auth/login',
  },
});

export { handler as GET, handler as POST };
