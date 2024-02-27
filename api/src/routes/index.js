const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activityRouter = require("./activity.routes.js");
const countriesRouter = require("./countries.routes.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activity", activityRouter);


module.exports = router;
