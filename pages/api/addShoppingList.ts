import { Category, Item, ShoppingItem } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    let lists;

    const { name, items } = req.body;
    try {
      lists = await prisma.shoppingList.create({
        include: {
          items: true,
        },
        data: {
          name: name,
          ownerId: user.id,
          isCompleted: false,
          items: {
            create: items.map((item: ShoppingItem) => {
              return {
                name: item.name,
                imageLink: item.imageLink,
                categoryId: item.categoryId,
                description: item.description,
                quantity: item.quantity,
              };
            }),
          },
        },
      });
    } catch (error: any) {
      console.error(error.message);
      res.status(401);
      res.json({ error: error ? error.message : "Error in Creating the Item" });
      return;
    }
    return res.json(lists);
  }
);
