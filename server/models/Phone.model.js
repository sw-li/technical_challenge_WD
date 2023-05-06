const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    manufacturer: {
      type: String,
      required: [true, "Manufacturer is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    color: {
      type: String,
      required: [true, "Color is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    imageFileName: {
      type: String,
      required: [true, "Image is required."], 
    },/* later to be replaced by imageUrl to prevent locally store the images*/
    /* imageUr:{
      type: String,
      required: [true, "Image link is required."],
    } */
    screen: {
      type: String,
      required: [true, "Screen details is required."],
    },
    processor: {
      type: String,
      required: [true, "Processor info is required."],
    },
    ram: {
      type: String,
      required: [true, "Ram info is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Phone", userSchema);
