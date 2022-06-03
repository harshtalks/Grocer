import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    let lists;
    try {
      lists = await prisma.shoppingList.findMany({
        where: {
          ownerId: user.id,
        },
        include: {
          items: {
            include: {
              category: true,
            },
          },
        },
      });
      res.json(lists);
    } catch (e: any) {
      console.error(e);
      res.status(401).json({
        error: e.message,
      });
      return;
    }
  }
);
