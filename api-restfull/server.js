const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Film-session",
    secret: "COOKIE_SECRET",
    httpOnly: true
  })
);

// database
const db = require("./app/models");
const Role = db.role;

 db.sequelize.sync();
 // db.sequelize.sync({force: true}).then(() => {
 //     console.log('Drop and Resync Database with { force: true }');
 //  initial();
 //  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to List film application." });
});


require("./app/routes/")(app);




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}