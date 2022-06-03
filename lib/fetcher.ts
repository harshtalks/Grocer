interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface Error {
  status?: number;
  info?: string;
}
export default async function Fetcher(url: string, data: any = undefined) {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return res.json();
}
