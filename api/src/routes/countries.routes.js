const { Op } = require("sequelize");
const { Router } = require("express");
const { Country, Activity } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
	const { name } = req.query;

	const options = { attributes: ["id", "name", "flag", "continent"] };
	if (name)
		options.where = {
			name: {
        [Op.or]: [
          {[Op.substring]: `%${name}%`},
          {[Op.iLike]: `%${name}`},
        ]
			},
		};

	try {
		const countries = await Country.findAll(options);
		res.json({
			query: { name: !!name, match: !!countries.length },
			status: "success",
			code: 200,
			payload: countries,
		});
	} catch (error) {
		next(error);
	}
});

router.get("/:cid", async (req, res, next) => {
	const cid = req.params.cid.toUpperCase();
	try {
		const country = await Country.findByPk(cid, {
			include: {
				model: Activity,
				through: { attributes: [] },
			},
		});

		if (!country) {
			res.status(404).json({
				status: "fail",
				code: 404,
				error: "Country with ID '" + cid + "' is not exists",
			});
			return;
		}

		res.json({ status: "success", code: 200, payload: country });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
