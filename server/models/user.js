var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 name: { type: String, required: [true, 'User Name required'] },
 contactNo: { type: String, required: [true, 'User phone number required'] },
 address: { type: String, required: [true, 'User Address required'] }
}, {
 versionKey: false
});
 
var user = mongoose.model('users', userSchema);
 
module.exports = user;
