const { Router } = require('express');
const { Country } = require("../db.js");
const activityRouter = require("./activity.routes.js");
const countriesRouter = require("./countries.routes.js");
const populationDB = require('../helpers/populationDatabase.js');

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activity", activityRouter);

router.get("/database/countries/seeds", async(req, res, next) => {
  try {
    const results = await Country.findAll();
  
    if(results.length) {
      res.send("DATABASE ALREDY CHARGE!");
      return
    };

    await populationDB()
    res.send("DATABASE CHARGE SUCCESSFULLY");
  
  } catch (error) {
    next(error)
  }
});


module.exports = router;
