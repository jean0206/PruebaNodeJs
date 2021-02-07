const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  latitude: {
    type: Number,
  },
  length: {
    type: Number,
  },
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  advertiser: {
    type: String,
  },
  description: {
    type: String,
  },
  reformed: {
    type: String,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  address: {
    type: String,
  },
  province: {
    type: String,
  },
  city: {
    type: String,
  },
  squareMeters: {
    type: Number,
  },
  priceSquareMeter:{
    type: Number
  },
  rooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  parking: {
    type: String,
  },
  secondHand: {
    type: String,
  },
  wardrobes: {
    type: String,
  },
  buildIn: {
    type: Number,
  },
  furnished: {
    type: String,
  },
  heatingIndividual: {
    type: String,
  },
  energeticCertification: {
    type: String,
  },
  plant: {
    type: Number,
  },
  exterior: {
    type: String,
  },
  inside: {
    type: String,
  },
  elevator: {
    type: String,
  },
  date: {
    type: Date,
  },
  street: {
    type: String,
  },
  neighborhood: {
    type: String,
  },
  district: {
    type: String,
  },
  terrace: {
    type: String,
  },
  storageRooom: {
    type: String,
  },
  kitchen: {
    type: String,
  },
  airConditioner: {
    type: String,
  },
  pool: {
    type: String,
  },
  garden: {
    type: String,
  },
  usefulSquareMeters: {
    type: Number,
  },
  SuitablePeopleReducedMobility: {
    type: String,
  },
  plants: {
    type: Number,
  },
  pets: {
    type: String,
  },
  balcony: {
    type: String,
  },
});

module.exports = mongoose.model('data',DataSchema)
