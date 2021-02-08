const fs = require("fs");
const { jsonToCsv } = require("json2csv");
const PDF = require("pdfkit");
const fastCsv = require("fast-csv");

const createDocument = (data, type) => {
  console.log(data);
  if (type == "pdf") {
    try {
      console.log(createPDF(data));
      return createPDF(data);
    } catch (error) {
      console.log(error.message);
    }
  } else if (type == "csv") {
    try {
      return createCSV(data);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const createPDF = (data) => {
  let fecha = Date.now();
  let doc = new PDF();
  let ruta = "src/public/person" + fecha + ".pdf";
  doc.pipe(fs.createWriteStream(ruta));

  data.forEach((dataNew) => {
    const keys = Object.keys(dataNew);
    const values = Object.values(dataNew);
    console.log(keys.length);
    for (let i = 0; i < keys.length; i++) {
      doc.text(keys[i] + ":" + values[i]);
    }
    doc.text("------------------------------------------------------------");

    console.log("Create pdf");
  });
  doc.end();
  return ruta;
};

const createCSV = (data) => {
  let fecha = Date.now();
  let ruta = "src/public/person" + fecha + ".csv";
  let ws = fs.createWriteStream(ruta);
  fastCsv
    .write(data, { headers: true })
    .on("finish", () => {
      console.log("");
    })
    .pipe(ws);
  return ruta;
};

module.exports = { createDocument };
