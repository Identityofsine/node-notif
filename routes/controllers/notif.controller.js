const nll = require('../../notification')
const notifController = nll.NotificationController;
notifController.addnotifTimer(nll.pipereader)
notifController.startInterval()

class NotificationController{
    async getNotifications(req, res){
        console.log("GET /notifs")
        //TODO:NOTIFICATION GRABBER FUNCTION
        res.status(201).json(
            [
                {"data":"gay"}
            ]
            )
    }
}

module.exports = new NotificationController();