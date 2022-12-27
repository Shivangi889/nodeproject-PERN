
const Pool = require("pg").Pool;

const ab = new Pool({
  user: "postgres",
  password: "kthl8822",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = ab;