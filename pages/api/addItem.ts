import { Item } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import { validateRoute } from "../../protection/auth";
import prisma from "../../utils/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const { name, description, categoryId } = req.body;
    let imageLink = "";

    const api = createApi({
      accessKey: "isQTnL_2Y4nNlSi8pNjxfuX1TyFinxrsP89N73D-zp8",
    });

    api.search
      .getPhotos({ query: name, page: 1, perPage: 1 })
      .then((result) => {
        switch (result.type) {
          case "error":
            imageLink = "";
          case "success":
            imageLink = result.response?.results[0].urls.small
              ? result.response?.results[0].urls.small
              : "";
        }
      });

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
