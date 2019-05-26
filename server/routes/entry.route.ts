import { Router, Response, Request } from "express";

import * as controller from "../controllers/entry.controller";

const router = Router();

/* fetch all */
router.get("/", async (_req: Request, res: Response) => res.json(await controller.getEntries()));

/* create new */
router.post("/", async (req: Request, res: Response) => res.json(await controller.createEntry(req.body)));

/* update existing */
router.put("/:id", async (req: Request, res: Response) => res.json(await controller.updateEntry(req.params, req.body)));

export default router;