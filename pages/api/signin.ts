import { Prisma, User } from "@prisma/client";
import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../utils/prisma";

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  let user;

  try {
    user = await prisma.user.findUnique({
      where: { email },
    });
  } catch (e: any) {
    res.status(401);
    res.json({
      error: e.message,
    });
  }
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      process.env.NEXT_PUBLIC_KEY as string,
      { expiresIn: "8h" }
    );

    res.status(200);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("GROCER_LOGIN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    return res.json(user);
  } else {
    res.status(401);
    res.json({
      error: "Invalid Credentials, Please check your entered email or password",
    });
  }
};
