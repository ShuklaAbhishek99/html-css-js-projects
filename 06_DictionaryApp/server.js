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
      "X-RapidAPI-Key": "b26a4dee57msh0a7e93b0c730934p140141jsn96dcbd8c5fe1",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
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
