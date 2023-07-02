import axios from 'axios';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('pandoraToken');
  if (!token) {
    return NextResponse.status(401).json({ message: 'Token not found' });
  }
  //valida el token
  //llama al log out de pandora/api
  const result = await axios.get(process.env.PANDORA_API + '/auth/logout', {
    headers: {
      Authorization: 'Bearer ' + token.value,
    },
  });
  if (result.status == 200) {
    cookieStore.delete('pandoraToken');
    // return NextResponse.status(200);
    return new Response({ status: 200 });
  }

  return NextResponse.status(500).json({ error: result.error });
}
