import express from "express";
import userRouter from "./routes/user_route.js";
import postRouter from "./routes/post_route.js";
import commentRouter from "./routes/comment_route.js";
import Associations from "./models/index.js";
import { createUsers, createPosts, createComments } from "./seed.js";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";

import db from "./config/database.js";

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//sequelize connection
try {
  await db.authenticate();
  //comment this line out when in production to not sync the tables
  //WARNING: this WILL erase ALL data in the tables
  await db.sync({ alter: true, force: true });

  //wait for the tables to sync before seeding
  await Associations();
  await createUsers();
  await createPosts();
  await createComments();

  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//routes
app.use("/api/", userRouter);
app.use("/api/", postRouter);
app.use("/api/", commentRouter);
//simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//cors test
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.listen(4000, () => {
  console.log("App listening on port 3000!");
});
