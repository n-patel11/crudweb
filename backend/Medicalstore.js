const mongoose = require('mongoose');

const MedicalstoreSchema = new mongoose.Schema({
  id:String,
  imageUrl: String,
  name: String,
  price:String,
  pharmaCompanie:String,
  information:String,
});

module.exports = mongoose.model('medicalstore', MedicalstoreSchema);
