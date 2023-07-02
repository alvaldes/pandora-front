import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('pandoraToken');
  if (!token) {
    return new Response('Token not found', {
      status: 401,
    });
  }
  const decodedToken = jwtDecode(token.value);

  const result = await axios.get(
    process.env.PANDORA_API + `/config/user/username/${decodedToken.sub}`,
    // process.env.PANDORA_API + `/config/user/4`,
    {
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  );
  if (result.status == 200) {
    return NextResponse.json(result.data);
  }

  return NextResponse.status(500).json({ error: 'Unexpected Error' });
}
