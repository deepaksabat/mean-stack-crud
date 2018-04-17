var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var studentSchema = new Schema({
 _id: { type: objectId, auto: true },
 name: { type: String, required: [true, 'Student Name required'] },
 rollno: { type: String, required: [true, 'Student RollNo required'] },
 gender: { type: String, required: [true, 'Student Gender required'] },
 contactNo: { type: String, required: [true, 'Student phone number required'] },
 address: { type: String, required: [true, 'Student Address required'] }
}, {
 versionKey: false
});
 
var student = mongoose.model('students', studentSchema);
 
module.exports = student;
