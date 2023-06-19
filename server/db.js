const Pool = require("pg").Pool

const pool = new Pool({
    user: "admin",
    password: "V7fiAh3K0PlxWLBeK8kzpZuhsMkYn4Rm",
    host: "dpg-ci7no5h8g3nfuca8atpg-a.oregon-postgres.render.com",
    port: 5432,
    database: "attendant",
    ssl: true
});

module.exports =  pool;