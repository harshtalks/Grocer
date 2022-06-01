import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (
    req: NextApiRequest,
    res: NextApiResponse,
    user: any,
    categoryId: number
  ) => {
    let category;

    try {
      category = await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      });
    } catch (e: any) {
      res.status(401);
      res.json({
        error: e ? e.message : "An Error has Occured",
      });
      return;
    }

    return res.json(category);
  }
);
