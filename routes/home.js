import express from "express";
import api from "../src/api.js";
import {filterUpcomingScreening} from "../src/upComing.js";
import upComing from "./upComing.js";

const router = express.Router();
router.get("/", async(req, res) => {
  const allScreening = await api.fetchAllScreenings()
  const upcomingScreening = await filterUpcomingScreening(allScreening)
     res.render("index", { upcomingScreening });
    })

export default router;
