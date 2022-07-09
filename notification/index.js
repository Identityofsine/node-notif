//control exports and shit -- 
const nll = require('./notificationListener')
exports.pipereader = nll.pipereader
exports.NotificationListener = new nll.NotificationListener()
