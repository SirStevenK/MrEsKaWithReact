import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import db from "Scripts/db";
import * as fs from "fs";
import formidable from "formidable";

export default (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method == "POST") {
        return new Promise((resolve) => {
            let form = new formidable.IncomingForm();
            form.multiples = true;
            form.parse(req, (err, fields: formidable.Fields, files: formidable.Files) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                if (typeof fields.name === "string" && typeof files.image !== "undefined") {
                    let imageFile:formidable.File = files.image;
                    let image:ImageAttributes = {
                        name: fields.name,
                        path: `./public/images/${fields.name}.${imageFile.type.substring(6)}`,
                        url: `/images/${fields.name}.${imageFile.type.substring(6)}`
                    }
                    if (db.addImage(image)) {
                        fs.renameSync(imageFile.path, image.path);
                        res.json(image);
                    }
                    else {
                        res.json({error: 1})
                    }
                }
                else {
                    res.json({error: 2})
                }
                resolve();
            });
        });
    }
    else {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Not POST method");
    }
}

export const config:PageConfig = {
    api: {
        bodyParser: false
    }
}