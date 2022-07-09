const nll = require('../../notification')
const Notif = require('../../notification/model/notif.model')
const notifController = nll.NotificationListener;
notifController.addnotifTimer(nll.pipereader)
notifController.startInterval()

class NotificationController{
    async getNotifications(req, res){
        console.log("GET /notifs")
        //TODO:NOTIFICATION GRABBER FUNCTION
        const notifs = await Notif.find()
        res.status(201).json(
            [
                notifs
            ]
            )
    }
}

module.exports = new NotificationController();