const axios = require("axios").default;
const config = require("../config/config.js");
const { Country } = require("../db.js");

const populationDB = async () => {
	try {
    const { data } = await axios.get(`${config.apiUrl}/all`);

    let countries = [];
    for (const key in data) {
      let { name, cca3, flags, continents, capital, subregion, area, population } = data[key];
      if(!flags?.svg || !capital || !continents) continue;

      countries.push({
        id: cca3,
        name: name.common,
        flag: flags.svg,
        continent: continents[0],
        capital: capital[0],
        subregion,
        area,
        population,
      });
    }

    await Country.bulkCreate(countries);
    console.log(`population database successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


module.exports = populationDB;
