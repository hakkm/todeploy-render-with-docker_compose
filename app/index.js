const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function start() {
  try {
    await client.connect();
    console.log("Connected to Postgres! 💾");

    app.get("/", async (req, res) => {
      const result = await client.query("SELECT NOW()");
      res.json({ hello: "world", db_time: result.rows[0] });
    });

    app.listen(PORT, () =>
      console.log(`App running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Could not start app:", err);
    process.exit(1);
  }
}

start();
