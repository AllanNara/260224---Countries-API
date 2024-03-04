const { Router } = require("express");
const { Country } = require("../db.js")

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if(!name) {
      const countries = await Country.findAll();
      res.json({status: "success", code: 200, payload: countries })
    }
  } catch (error) {
    next(error)
  }
});

router.get("/:cid", async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
});

module.exports = router;