import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  let respuesta;
  const cookieStore = cookies();
  const token = cookieStore.get('pandoraToken');
  if (!token) {
    return new Response('Token not found', {
      status: 401,
    });
  }
  const decodedToken = jwtDecode(token.value);

  await axios.get(
    process.env.PANDORA_API + `/config/user/username/${decodedToken.sub}`,
    {
      headers: {
        Authorization: 'Bearer ' + token.value,
      },
    }
  )
  .then((res) => {
    respuesta = NextResponse.json(res.data);
  })
  .catch((err)=>{
    respuesta = new Response(null, { status: err.response.status,});
  });

  return respuesta;
}
