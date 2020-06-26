import { NextApiRequest, NextApiResponse } from "next";
import db from "Scripts/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const {name} = req.body;
        if (typeof name === "string") {
            db.deleteImage(name);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({response: true});
        }
        else {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Bad Attributes");
        }
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not POST method");
    }
}