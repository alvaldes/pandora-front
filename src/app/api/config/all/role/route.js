import axios from "axios";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("pandoraToken");
  if (!token) {
    return new Response("Token not found", {
      status: 401,
    });
  }

  const result = await axios.get(process.env.PANDORA_API + `/config/role`, {
    headers: {
      Authorization: "Bearer " + token.value,
    },
  });
  if (result.status == 200) {
    return NextResponse.json(result.data);
  }

  return NextResponse.status(500).json({ error: "Unexpected Error" });
}
