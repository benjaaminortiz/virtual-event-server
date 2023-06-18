const express = require("express");
const cors = require("cors");
const pool = require("./db")
require("dotenv").config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });

});


app.post("/", async (req, res) => {
    try{
        const {name, lastName, email, country, phoneNum, role} = req.body

        const text = "INSERT INTO atTendanTs(name, lastname, email, country, phonenum, role) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
        const values = [name, lastName, email, country, phoneNum, role];

       const addToDatabase =  await pool.query(text, values);
       res.send(addToDatabase).status(200);

       console.log("Añadido con Éxito");
    
       } catch (err){
        console.error(err)
    }

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});