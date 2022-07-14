const {delay} = require('../gnrlfunc')
const fs = require('fs');
const EventEmitter = require('events');
const Notif = require('./model/notif.model');
//add notifications based on a timer.
class NotificationListener extends EventEmitter {
    //have an array of notifTimers and have an interval
    constructor() {
        super();
        this.notifTimers = [];
        setInterval(() => this.removeExpired(), 1000 * 1)

    }

    addnotifTimer(notifTimer){
        if(notifTimer instanceof _notifTimer){
            console.log("Adding %s to the array", notifTimer)
            this.notifTimers.push(notifTimer);
        }
    }

    async startInterval(){
        for(let i in this.notifTimers){
            const nT = this.notifTimers[i]
            if(nT instanceof _notifTimer){
                setInterval(() => {this.getNotifications(nT)}, nT.timer * 1000)
            }
            else
            console.error("MiERR: Item '%s' is not a instance of _notifTimer", nT)
            
        }
    }
    async getNotifications(notifTimer) {
        if(notifTimer instanceof _notifTimer){
            //await delay(notifTimer.timer * 1000);
            const response = await notifTimer.expression();
            //if(Notif.count() > 0){
                try {
                    const duplicate = await Notif.findOne({content:response.content}).exec();
                    if(duplicate) {
                        console.warn(`WARN : Notification from ${response?.source}, is a duplicate!`)
                        return;
                    };
                } catch (error) {
                    console.error(error)
                }
            //}
            const result = await Notif.create({
                "name" : response?.name,
                "content" : response?.content,
                "source": response?.source,
                "icon":response?.icon, 
                "timesince": response?.timesent,
                "expiresIn": response?.expireIn
            });
            console.log(result)
            //response should be a notification object
        }
        else
            console.error("MiERR: Argument '%s' is not a instance of _notifTimer", notifTimer)
    }
    async removeExpired(){
        const allNotifs = await Notif.find();
        for(let z in allNotifs){
            let x = allNotifs[z]
            if(x.expiresIn <= Date.now() / 1000 ){
                await Notif.deleteOne({ _id: x._id });
                //console.log(`notification expires in : ${x.expiresIn}\nvs ${Date.now() / 1000}`)
            }
        }
    }
}

class _notifTimer{

    constructor(expression, timer){
        //takes an expression and a timer(seconds) argument -- this class is just to hold data about how to notify and when to keep checking.
        if (expression instanceof Function)
            this.expression = expression;
        else
            this.expression = () => {}; 
        this.timer = timer;
    }

    getResponse(){
        const response = this.expression();
        //respose code    
    }
}

const pipereader = new _notifTimer(() => {
    try{
        let rawdata = fs.readFileSync('/tmp/notif-pypipe');
        let data = JSON.parse(rawdata);
        return {
            name: data.name,
            content: data.content,
            source : data.source,
            icon : data.icon,
            timesent : data.timesent,
            expireIn: data.expireIn,
        }
    }
    catch(e){}
}, 1)

exports.pipereader = pipereader
exports._notifTimer = _notifTimer;
exports.NotificationListener = NotificationListener



