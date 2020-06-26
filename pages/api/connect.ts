import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method == "POST") {
        let {login, password} = req.body;
        if (typeof login === "string" && typeof password === "string") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            if (login == process.env.ADMIN_LOGIN && password == process.env.ADMIN_PASS) res.json({logged:true})
            else res.json({logged:false})
        }
        else {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Bad attributes");
        }
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not POST method");
    }
} 