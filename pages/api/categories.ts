import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    let categories;

    try {
      categories = await prisma.category.findMany({});
    } catch (e: any) {
      res.status(401);
      res.json({
        error: e ? e.message : "An Error has Occured",
      });
      return;
    }

    return res.json(categories);
  }
);
