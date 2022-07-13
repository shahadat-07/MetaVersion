// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let mysql = require("mysql");

let database = mysql.createConnection({
    host: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

database.connect((err) => {
    if (err) throw err;
});

export default function handler(req, res) {
    if (req.method == "POST") {
        const reqBody = JSON.parse(req.body);
        if (reqBody.methodName == "checkRegister") {
            console.log("checking register");
            const account = reqBody.account;
            const sql = `SELECT score FROM USERS where user_address='${account}'`;
            database.query(sql, (err, result) => {
                if (err) res.status(200).json({ status: "DB ERROR" });
                if (result.length === 0) {
                    res.status(200).json({ status: false });
                } else if (result.length === 1) {
                    res.status(200).json({ status: true });
                }
            });
        } else if (reqBody.methodName == "register") {
            console.log("registering...");
            const telegram = reqBody.telegram;
            const email = reqBody.email;
            const metaverse = reqBody.metaverse;
            const account = reqBody.account;
            const sql = `INSERT IGNORE INTO users 
            (user_address, user_telegram, user_email, user_metaverse, score) 
            VALUES ('${account}', '${telegram}','${email}', '${metaverse}', ${10})`;
            database.query(sql, (err, result) => {
                if (err) throw err;
            });
            database.commit();
        }
    } else {
        res.status(403).json({ error: "Method Not allowed" });
    }
}
