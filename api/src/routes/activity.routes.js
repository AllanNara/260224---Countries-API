const { Router } = require("express");
const { Activity, Country } = require("../db.js")

const router = Router();

router.post("/", async(req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body;

  if(!name || !difficulty || !duration) {
    res.status(400).json({ status: "error", code: 400, error: "Missings Fields" });
    return
  };

  if(Array.isArray(countries) && countries.length === 0) {
    res.status(400).json({ status: "error", code: 400, error: "Needs at least one country" });
    return
  };

  try {
    const newActivity = await Activity.create({ name, difficulty, duration, season });

    const countriesFound = [];
    for (const position of countries) {
      let country = await Country.findByPk(countries[position]);
      countriesFound.push(country)
    }

    await newActivity.addCountries(countriesFound)

    res.status(201).json({ status: "created", code: "201", payload: newActivity })
  } catch (error) {
    next(error)
  }
});

module.exports = router;