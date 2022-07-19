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
            const account = reqBody.account;
            const sql = `SELECT score FROM users WHERE user_address=${database.escape(
                account,
            )}`;
            database.query(sql, (err, result) => {
                if (err) res.status(200).json({ status: "DB ERROR" });
                if (result.length === 0) {
                    res.status(200).json({ status: false });
                } else if (result.length === 1) {
                    res.status(200).json({ status: true });
                }
            });
        } else if (reqBody.methodName == "register") {
            const telegram = reqBody.telegram;
            const email = reqBody.email;
            const metaverse = reqBody.metaverse;
            const account = reqBody.account;
            const sql = `INSERT IGNORE INTO users 
            (user_address, user_telegram, user_email, user_metaverse, score) 
            VALUES (${database.escape(account)}, ${database.escape(
                telegram,
            )},${database.escape(email)}, ${database.escape(
                metaverse,
            )}, ${10})`;
            database.query(sql, (err, result) => {
                if (err) throw err;
            });
            database.commit();
            res.status(200).json({ message: "OK" });
        } else if (reqBody.methodName == "fetchUser") {
            const account = reqBody.account;

            const sql = `SELECT user_telegram, user_email, user_metaverse, score FROM users WHERE user_address=${database.escape(
                account,
            )}`;
            database.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json(result[0]);
            });
        } else if (reqBody.methodName == "updateUserInfo") {
            const account = reqBody.account;
            const newTelegram = reqBody.newTelegram;
            const newEmail = reqBody.newEmail;

            if (newTelegram.length > 1) {
                const sql = `UPDATE users set user_telegram=${database.escape(
                    newTelegram,
                )} WHERE user_address=${database.escape(account)}`;
                database.query(sql, (err, result) => {
                    if (err) throw err;
                });
                database.commit();
            }

            if (newEmail.length > 1) {
                const sql = `UPDATE users SET user_email=${database.escape(
                    newEmail,
                )} WHERE user_address=${database.escape(account)}`;
                database.query(sql, (err, result) => {
                    if (err) throw err;
                });
                database.commit();
            }
        } else {
            res.status(200).json({ message: "Error" });
        }
    } else {
        res.status(403).json({ error: "Method Not allowed" });
    }
}
