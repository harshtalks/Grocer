import { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";
import { validateRoute } from "../../protection/auth";

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user: any) => {
    const { query } = req.body;

    const api = createApi({
      accessKey: process.env.NEXT_PUBLIC_UNSPLASH as string,
    });

    api.search
      .getPhotos({ query: query, page: 1, perPage: 1 })
      .then((result) => {
        switch (result.type) {
          case "error":
            console.log("error occurred: ", result.errors[0]);
            res.json({ error: result.errors[0] });
          case "success":
            const photo = result.response;
            res.json(photo);
        }
      });
  }
);
