// this is where the server index.js file retrives all our GET and POST requests, this is the heart of it
const express = require("express");

//the userSettings.routes include; makes things more organizied.
const notifRouter = require("./controllers/notif.routes");

const router = express.Router();

router.use("/", notifRouter);


//module.exports = what is returned when this file is included/required
module.exports = router;