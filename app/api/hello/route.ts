import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // let res;
  // setTimeout(() => (res = new Response('Hello, Next.js!')), 2000);
  // return res;

  // do the same but with a promise, so the response is sent after 2 seconds
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     // return a json response
  //     resolve(NextResponse.json({ message: 'Hello, Next.js!' }));
  //   }, 2000);
  // });
  return NextResponse.json(JSON.stringify({ text: 'Hello, Next.js!' }), {
    status: 200,
  });
}
