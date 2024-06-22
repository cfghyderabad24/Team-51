const mongoose = require("mongoose");
const {StudentSchema}=require('./studentmodel')

const FacultySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
      },
    password:{
        type: String,
        required: true,
    },

    phone: {
      type: Number,
    },

    email: {
      type: Number,
      required: true,
    },

    
  },
  {
    timestamps: true,
  }
);


const Faculty = mongoose.model("Faculty", FacultySchema);

module.exports = Faculty;