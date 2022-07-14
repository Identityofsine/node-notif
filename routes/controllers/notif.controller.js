const nll = require('../../notification')
const Notif = require('../../notification/model/notif.model')
const notifController = nll.NotificationListener;
notifController.addnotifTimer(nll.pipereader)
// notifController.addnotifTimer(new nll._notifTimer(() => {

//     return {
//         name: data.name,
//         content: data.content,
//         source : data.source,
//         icon : data.icon,
//         timesent : data.timesent,
//         expireIn: data.expireIn,
//     }
//     //must  return json
// }, 5 * 60))
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