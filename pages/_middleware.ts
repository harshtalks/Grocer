import { NextRequest, NextResponse } from "next/server";

const signedInPages = ["/", "/history", "/stats"];

export default function middleWare(req: NextRequest) {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.GROCER_LOGIN;
    const url = req.nextUrl.clone();

    if (!token) {
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
