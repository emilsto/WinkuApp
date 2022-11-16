import express from "express";
import userRouter from "./routes/user_route.js";
import postRouter from "./routes/post_route.js";
import Associations from "./models/index.js";
import { createUsers, createPosts } from "./seed.js";

import db from "./config/database.js";

const app = express();


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
  
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}



//routes

app.use("/api/", userRouter);
app.use("/api/", postRouter);


//simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(4000, () => {
  console.log("App listening on port 3000!");
});
