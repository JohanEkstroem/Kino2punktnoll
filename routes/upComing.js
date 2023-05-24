import express from "express";
import { fetchAllMovies } from '../src/api.js';
import { filterUpcomingScreening } from '../src/upComing.js';

const router = express.Router();

router.get("/up-coming",
    async (req, res) => {
        //fetching data from CMS-api
        res.json(await filterUpcomingScreening(fetchAllMovies()));

    })

export default router;