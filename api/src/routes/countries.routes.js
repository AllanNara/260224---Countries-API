const { Router } = require("express");
const { Country } = require("../db.js")

const router = Router();

router.get("/", (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
});

router.get("/:cid", (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
});

module.exports = router;