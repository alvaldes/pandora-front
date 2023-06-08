import axios, { HttpStatusCode } from 'axios';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('pandoraToken');
  if (!token) {
    return new Response('Token not found', {
      status: 401,
    });
  }
  //valida el token
  //llama al log out de pandora/api
  const result = await axios.get(process.env.PANDORA_API + '/auth/logout', {
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
  });
  if (result.status == HttpStatusCode.Ok) {
    cookieStore.delete('pandoraToken');
    return new Response('logout successfuly', {
      status: 200,
    });
  }

  return NextResponse.status(400).json({ error: result.error });
}
