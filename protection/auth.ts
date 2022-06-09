import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../utils/prisma";

interface JwtPayload {
  id: number;
}

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.GROCER_LOGIN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(
          token,
          process.env.NEXT_PUBLIC_KEY as string
        ) as JwtPayload;
        user = await prisma.user.findUnique({
          where: { id: id },
        });

        if (!user) {
          throw new Error("Not a real user!");
        }
      } catch (e) {
        console.error(e);
        res.status(401);
        res.json({ error: "you are not authorized" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "you are not authorized" });
  };
};

export const validateToken = (token: any) => {
  const user = jwt.verify(token, "sks");

  return user;
};
