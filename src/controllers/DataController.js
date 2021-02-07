const csvParser = require("csv-parser");
var fs = require("fs");
const Data = require("../models/Data");
const filter = require("../lib/CalculateDistance");

const File = __dirname + "/file.csv";

//Add the row in the DB
const addRow = async (row) => {
  const DataNew = new Data({
    latitude: row.Latitud,
    length: row.Longitud,
    id: row.ID,
    title: row.Titulo,
    advertiser: row.Anunciante,
    description: row.Descripcion,
    reformed: row.Reformado,
    phone: row.Telefonos,
    type: row.Tipo,
    price: row.Precio,
    priceSquareMeter: row["Precio por metro"],
    address: row.Direccion,
    province: row.Provincia,
    city: row.Ciudad,
    squareMeters: row["Metros cuadrados"],
    rooms: row.Habitaciones,
    bathrooms: row["Baños"],
    parking: row.Parking,
    secondHand: row["Segunda mano"],
    wardrobes: row["Armarios Empotrados"],
    buildIn: row["Construido en"],
    furnished: row.Amueblado,
    heatingIndividual: row["Calefacción individual"],
    energeticCertification: row["Certificación energética"],
    plant: row.Planta,
    exterior: row.Exterior,
    inside: row.Interior,
    elevator: row.Ascensor,
    date: row.Fecha,
    street: row.Calle,
    neighborhood: row.Barrio,
    district: row.Distrito,
    terrace: row.Terraza,
    storageRooom: row.Trastero,
    kitchen: row["Cocina Equipada"],
    airConditioner: row["Aire acondicionado"],
    pool: row.Piscina,
    garden: row["Jardín"],
    usefulSquareMeters: row["Metros cuadrados útiles"],
    SuitablePeopleReducedMobility:
      row["Apto para personas con movilidad reducida"],
    plants: row.Plantas,
    pets: row["Se admiten mascotas"],
    balcony: row["Balcón"],
  });
  const dateSaved = await DataNew.save();
  return dateSaved;
};

const uploadData = async (req, res) => {
  await Data.collection.drop().then(() => {
    console.log("Success");
  });
  fs.createReadStream(File)
    .pipe(csvParser())
    .on("data", async (row) => {
      try {
        const rowSave = await addRow(row);
      } catch (error) {
        console.log(error.message);
      }
    })
    .on("end", () => {
      res.status(200).json({ message: "data has been uploaded" });
    })
    .on("error", (error) => {
      res.status(401).json({ message: "data hasn't been uploaded" });
    });
};

const filterPriceRoom = async (req, res) => {
  if (parseFloat(req.params.priceMin) > parseFloat(req.params.priceMax)) {
    res.json({
      error: "The minimum price must not be higher than the maximum price",
    });
  } else {
    console.log(typeof req.params.priceMin);
    const dataFinde = await Data.find({
      $and: [
        {
          rooms: req.params.rooms,
          price: { $gte: parseFloat(req.params.priceMin) },
        },
        { price: { $lte: parseFloat(req.params.priceMax) } },
      ],
    });
    res.json(dataFinde);
  }
};

const getAverage = async (req, res) => {
  const latitude = req.params.latitude;
  const length = req.params.length;
  const distance = req.params.distance;
  const allData = await Data.find();
  console.log(allData.length)
  let squareMeter = allData.map((data) => {
    if (
      filter.calculateDistance(
        data.latitude,
        data.length,
        latitude,
        length,
        distance
      )
    ) {
      return data.priceSquareMeter;
    }
  });
  squareMeter = await squareMeter.filter((data) => data != undefined);
  console.log(squareMeter)
  if (squareMeter.length!=0) {
    try {
      const sum = squareMeter.reduce(
        (previous, current) => (current += previous)
      );
      const total = sum / squareMeter.length;
      res.status(200).json({
        average: total,
      });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  } else {
    res.json({ message: "no matches found" });
  }
};

module.exports = { uploadData, filterPriceRoom, getAverage };
