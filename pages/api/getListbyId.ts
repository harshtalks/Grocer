import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    let list;

    const { id } = req.body;
    try {
      list = await prisma.shoppingList.findUnique({
        where: {
          id: id,
        },
      });
      return res.json(list);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
      return;
    }
  }
);
