const express = require('express');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:8080"
};

const db = require("./app/models");
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.json({message: 'ok'});
});

require("./app/routes/turorial.routes")(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
