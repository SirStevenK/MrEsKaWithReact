import { NextApiRequest, NextApiResponse } from "next";
import db from "Scripts/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({data: db.getImages()});
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not GET method");
    }
}