const express = require("express");

let app = express();

app.get("/getExemplaryUser",(req,res) => {
  res.send({
    name : "Szymon",
    surname : "Smalcerz",
    age : 22
  });
})

app.get("*",(req,res) => {
  res.status(404).send("bad gateway");
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening at port ${process.env.PORT || 3000}`)
})

module.exports = {
  app
}
