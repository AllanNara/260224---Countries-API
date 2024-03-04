const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const config = require("./src/config/config.js")

require("./src/helpers/populationDatabase.js")
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(config.port, () => {
    console.log(`%s listening at ${config.port}`); // eslint-disable-line no-console
  });
});
