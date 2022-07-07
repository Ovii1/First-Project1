"use strict";

import express from "express";
import mongoose from "mongoose";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage", {});
});

app.listen(3000, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://LazarOvidiu:<fkx2y5qh9>@cluster0.93hawdg.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Up and running...");
  } catch (err) {}
});

app.get("/aboutUs", (req, res) => {
  res.render("about-us", {});
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});
