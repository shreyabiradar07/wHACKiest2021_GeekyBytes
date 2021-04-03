const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override");
const app = express();
// const dbURL = "mongodb://localhost/blog";

// mongoose
//   .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => app.listen(3000))
//   .catch((err) => {
//     console.log(err);
//   });

mongoose
  .connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(4200))
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });

  res.render("articles/index", { articles: articles });
});
app.use("/articles", articleRouter);