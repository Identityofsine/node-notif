class NotificationController{
    async getNotifications(req, res){
        console.log("GET /notifs")

        //TODO:NOTIFICATION GRABBER FUNCTIOn
        res.status(201).json(
            [
                {
                    "name":"Name",
                    "content":"Content Shit in here",
                    "source":"com.apple.iMessage",
                    "icon":"assets/icon.png",
                    "timesent":new Date().getTime(),
                    "expireIn":60,
                },
                {
                    "name":"Name",
                    "content":"Content Shit in here",
                    "source":"com.apple.iMessage",
                    "icon":"assets/icon.png",
                    "timesent":new Date().getTime(),
                    "expireIn":60,
                },
                {
                    "name":"Name",
                    "content":"Content Shit in here",
                    "source":"com.apple.iMessage",
                    "icon":"assets/icon.png",
                    "timesent":new Date().getTime(),
                    "expireIn":60,
                },
            ]
            )
    }
}

module.exports = new NotificationController();