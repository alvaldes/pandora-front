import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('pandoraToken');
  if (!token) {
    return new Response('Token not found', {
      status: 401,
    });
  }
  return NextResponse.json({
    token: token.value,
  });
}
