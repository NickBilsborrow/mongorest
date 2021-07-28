require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./users/users.routes");
const movieRouter = require("./movies/movies.routes");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

