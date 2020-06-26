import { NextApiRequest, NextApiResponse } from "next";
import db from "Scripts/db";
import { isFilType } from "Scripts/check";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "GET") {
        let filter:Partial<ArticleAttributes> = {};
        const {type} = req.query;
        if (type && isFilType(type)) filter.category = type;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({data: db.getArticles(filter)});
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not GET method");
    }
}