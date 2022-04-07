const express = require("express");
const pug = require("pug");
const { products } = require("./utils.js");
const path = require("path");
const axios = require("axios");
const { atob } = require("abab");
const moment = require("moment");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let { limit, merchant } = req.query;
  limit = parseInt(limit);
  res.render("index", { products, limit, merchant });
});

const extractValue = (post, key) =>
  post.TagSet.filter((p) => p.Key == key)[0]?.Value || "";
const getPosts = async () => {
  const response = await axios.get("https://api.pretzelbox.cc/p/blog", {
    headers: {
      origin: "https://pretzelbox.cc/",
    },
  });
  return response.data["blog@pretzelbox.cc"]?.map((post) => {
    const blogPost = {
      title: atob(extractValue(post, "subjectBase64")),
      description: atob(extractValue(post, "previewBase64")),
      image: post.attachments[0]?.location,
      time: moment(Number(extractValue(post, "date")) * 1000).fromNow(),
    };
    return blogPost;
  });
};

const getPost = async (slug) => {
  try {
    const response = await axios.get(
      "https://api.pretzelbox.cc/p/post?slug=" + (slug || "28j9jh7"),
      {
        headers: {
          origin: "https://pretzelbox.cc",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

app.get("/blog/:id", async (req, res) => {
  res.render("blog" + req.params.id, {
    tags: [],
    posts: await getPosts(),
  });
});

app.get("/post/:id", async (req, res) => {
  getPost();
  res.render("post" + req.params.id, {
    tags: [],
    post: await getPost(req.query.slug),
  });
});

app.listen(port, (err) => console.log(err || "Listen on port " + port));
