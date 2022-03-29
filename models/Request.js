const mongoose = require("mongoose");
const User = require("./User");

const RequestSchema = new mongoose.Schema({
  user: {
    type: User.schema,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
 description: {     
   type: String,
   default: 1,
   required: true,
   },
  status: {
    type: String,
    default: "Requested",
    required: true,
  },
});
const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;
