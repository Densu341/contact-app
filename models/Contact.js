const mongoose = require("mongoose");

const Contact = new mongoose.model("Contact", {
  nama: { type: String, required: true },
  nomer: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = Contact;
