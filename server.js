const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const compression = require("compression");
const book = require("./client/models/book.js");

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.get("/api/books/", ({body}, res) => {
  book.create(body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

app.post("/api/books/", ({body}, res) => {
  book.insertMany(body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

app.delete("/api/books/:id", (req, res) => {
  book.find({}).sort({date: -1})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});