const NotificationController = require('./notif.controller');

var express = require("express");
var router = express.Router();

router.get("/notif", NotificationController.getNotifications)

module.exports = router;