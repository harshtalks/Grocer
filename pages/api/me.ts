import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../protection/auth";

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user: any) => {
    res.json(user);
  }
);
