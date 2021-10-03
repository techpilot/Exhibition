const fs = require("fs")

const tour = JSON.parse(fs.readFileSync(`${__dirname}\\tours-simple.json`, "utf-8"))
console.log(tour[0].images[0])

export default tour