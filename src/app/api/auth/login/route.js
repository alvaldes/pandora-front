import axios, { HttpStatusCode } from 'axios';
import { serialize } from 'cookie';
import jwtDecode from 'jwt-decode';

export async function POST(req) {
  let respuesta;
  const { username, password } = await req.json();
  await axios.post(process.env.PANDORA_API + '/auth/login', {
    username: username,
    password: password,
  })
  .then((res) => {
    const token = res.data.accessToken;
    const decodedToken = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000);
    const serialized = serialize('pandoraToken', token, {
      httpOnly: true,
      expires: expirationDate,
      path: '/',
    });

    respuesta = new Response('login successfuly', {
      status: 200,
      headers: { 'Set-Cookie': serialized },
    });
  })
  .catch((err) => {
    const {response} = err;
    respuesta = new Response('login error', {
      status: response.status,
    });
  });
  
  return respuesta;
}
