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
const dbURL =
  "mongodb+srv://shreya:badla@1234$@blog.c50no.mongodb.net/blog-db?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000, "192.168.43.155"))
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
