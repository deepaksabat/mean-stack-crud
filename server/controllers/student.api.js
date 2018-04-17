var express = require("express"),
 router = express.Router(),
 student = require("../models/student.js");
 
router.get("/", function(req, res) {
 student.find({}, function(err, data) {
 if (err) {
 res.send(err);
 return;
 }
 res.send(data);
 });
}).get("/:id", function(req, res) {
 var id = req.params.id;
 student.find({ _id: id }, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data[0]);
 });
}).post("/", function(req, res) {
 var obj = req.body;
 console.log(obj);
 var model = new student(obj);

 model.save(function(err) {
 if (err) {
 	console.log(err);
 res.send(err);
 return;
 }
 res.send("created");
 });
}).put("/:id", function(req, res) {
 var id = req.params.id;
 var obj = req.body;
 
 student.findByIdAndUpdate(id, { name: obj.name, rollno:obj.rollno, gender:obj.gender, contactNo: obj.contactNo, address: obj.address }, 
function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("updated");
 });
}).delete("/:id", function(req, res) {
 var id = req.params.id;
 student.findByIdAndRemove(id, function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("deleted");
 });
});
 
module.exports = router;