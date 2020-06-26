export default function(name: string, body?: any) {
    if (!body) return fetch(`${process.env.URL}:${process.env.PORT}/api/${name}`);
    else return fetch(`${process.env.URL}:${process.env.PORT}/api/${name}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}