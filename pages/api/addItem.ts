import { Item } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const { name, description, imageLink, categoryId } = req.body;

    let item: Item;
    try {
      item = await prisma.item.create({
        data: {
          name: name,
          description: description,
          categoryId: categoryId,
          imageLink: imageLink,
        },
        include: {
          category: true,
        },
      });
    } catch (e: any) {
      console.error(e);
      res.status(401);
      res.json({ error: e ? e.message : "Error in Creating the Item" });
      return;
    }

    res.json(item);
  }
);
