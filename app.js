const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["KS8", "Ansible", "AWS", "Web Development"];
let workItems = [];


app.get("/", function (req, res) {

    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-us", option)
    res.render("list", { listTitle: day, addNew: items })
})
app.post("/", function (request, respond) {
    item = request.body.newItem;
    items.push(item);
    respond.redirect("/");
})


app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", addNew: workItems })
})
app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})


app.listen(80, function (req, res) {
    console.log("lstening");
});