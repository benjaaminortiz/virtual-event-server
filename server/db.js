const Pool = require("pg").Pool

const pool = new Pool({
    user: "admin",
    password: "V7fiAh3K0PlxWLBeK8kzpZuhsMkYn4Rm",
    host: "dpg-ci7no5h8g3nfuca8atpg-a",
    port: 5432,
    database: "attendants"
});

module.exports =  pool;