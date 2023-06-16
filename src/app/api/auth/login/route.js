import axios, { HttpStatusCode } from 'axios';
import { serialize } from 'cookie';
import jwtDecode from 'jwt-decode';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { username, password } = await req.json();
  const result = await axios.post(process.env.PANDORA_API + '/auth/login', {
    username: username,
    password: password,
  });
  if (result.status == HttpStatusCode.Ok) {
    const token = result.data.accessToken;
    const decodedToken = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    const serialized = serialize('pandoraToken', token, {
      httpOnly: true,
      expires: expirationDate,
      path: '/',
    });

    return new Response('login successfuly', {
      status: 200,
      headers: { 'Set-Cookie': serialized },
    });
  }

  return NextResponse.status(401).json({ error: result.error });
}
