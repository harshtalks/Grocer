import { Item } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    let items: Item[];

    try {
      items = await prisma.item.findMany({
        where: {},
        include: {
          category: true,
        },
      });
      return res.json(items);
    } catch (e: any) {
      console.error(e);
      res.status(401);
      res.json({
        error: e ? e.message : "Error in fetching the items",
      });
      return;
    }
  }
);
