import { Router } from "express";

import entryRoutes from "./entry.route";

const router = Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (_req, res) => res.send("OK"));

router.use("/entry", entryRoutes);

export default router;
