import { NextApiRequest, NextApiResponse } from "next";
import db from "Scripts/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        try {
            const {article: {category, content, description, mainImageUrl, name, url}} = req.body as {article: ArticleAttributes};
            if (typeof category === "string" && typeof content === "string" && typeof description === "string" && typeof mainImageUrl === "string" && typeof name === "string" && typeof url === "string") {
                if (name.length > 0 && url.length > 0) {
                    const article = {category, content, description, mainImageUrl, name, url: "/articles/"+url};
                    if (db.addArticle(article)) {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.json(article);
                    }
                    else throw "URL"
                }
                else {
                    throw "Attributes"
                }
            }
            else {
                throw "Attributes"
            }
        }
        catch (e) {
            console.log(e);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            if (e == "URL") res.json({error: 1});
            else res.json({error: 2});
        }
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not POST method");
    }
}