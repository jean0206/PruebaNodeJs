const csvToJson = require("csvtojson");
const axios = require("axios");
const csvParser = require("csv-parser");
var fs = require("fs");

const fileCsv =
  "https://gist.githubusercontent.com/leifermendez/627650290d3edaeb420eef50395da73f/raw/b2bcd562e837a64bf3eff99cd89e66ecb29d54df/resource_accommodation.csv";
const File = __dirname + "/file.csv";

const getJson = () => {
  const results = [];
  fs.createReadStream(File)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
        return (results)
    });

};

const sum= (a,b)=>{
    return a+b
}

/*
const getJson=(req,res)=>{
    csvToJson()
.fromFile(fileCsv)
.then(csvData=>{
    res.json(csvData)
})
}*/

module.exports = { getJson,sum };
