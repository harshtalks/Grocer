import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";
import prisma from "../../utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, firstName, lastName, password } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        name: firstName + " " + lastName,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e: any) {
    res.status(401);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        res.json({
          error:
            "Account already exists with this email id. Please use different email id to continue.",
        });
      }
    }
    res.json({
      error: e.message,
    });
    return res;
  }

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
  res.json(user);
};
