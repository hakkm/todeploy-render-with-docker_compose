const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

async function start() {
  try {
    app.get("/", async (req, res) => {
      if (!API_KEY)
        res.json({ hello: "visit another time, know we're our of api key" });
      else 
          res.json({ hello: "Hi mom!" });
    });

    app.listen(PORT, () =>
      console.log(`App running on http://localhost:${PORT}`),
    );
  } catch (err) {
    console.error("Could not start app:", err);
    process.exit(1);
  }
}

start();
