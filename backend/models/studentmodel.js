const mongoose = require("mongoose");


const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    password:String,
    

   
  },
  {
    timestamps: true,
  }
);


const Student = mongoose.model("Student", StudentSchema);

module.exports = {
  StudentSchema,
  Student
};