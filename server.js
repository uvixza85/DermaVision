import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
const db = new pg.Client({
    user: "postgres",
    host: 'localhost',
    database: 'SkinCancerproject',
    password: 'chemicals@85',
    port: 5432,
})
db.connect();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/save-report", async (req, res) => {
    const { name, age, gender, diagnosis, confidence, imageurl } = req.body;

    try {
        await db.query(
            "INSERT INTO patient (name, age, gender, diagnosis, confidence, imageurl) VALUES ($1, $2, $3, $4, $5, $6)",
            [name, age, gender, diagnosis, confidence, imageurl]
        );

        res.status(200).json({ message: "Report saved" });
    } catch (err) {
        console.error("Insert error:", err);
        res.status(500).json({ error: "Failed to save report" });
    }
});


app.get("/reports", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM patient ORDER BY id DESC");
        res.json(result.rows);
    } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).json({ error: "Failed to fetch history" });
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
