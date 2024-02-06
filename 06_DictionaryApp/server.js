const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  return res.sendFile("public/index.html", { root: __dirname });
});

app.get("/searchword", (req, res) => {
  res.send("Hello World!");
  // console.log(req.params)
  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: "good" },
    headers: {
      "X-RapidAPI-Key": "bkey1",
      "X-RapidAPI-Host": "key2",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
