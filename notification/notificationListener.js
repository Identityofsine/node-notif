const {delay} = require('../gnrlfunc')
const fs = require('fs');
const EventEmitter = require('events');

//add notifications based on a timer.
class NotificationListener extends EventEmitter {
    //have an array of notifTimers and have an interval
    constructor() {
        super();
        this.notifTimers = [];

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

                setInterval(() => this.getNotifications(nT), nT.timer * 1000)
            }
            else
            console.error("MiERR: Item '%s' is not a instance of _notifTimer", nT)

        }
    }
    async getNotifications(notifTimer) {
        if(notifTimer instanceof _notifTimer){
            //await delay(notifTimer.timer * 1000);
            const response = await notifTimer.expression();
            //response should be a notification object
        }
        else
            console.error("MiERR: Argument '%s' is not a instance of _notifTimer", notifTimer)
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
}

const nll = new NotificationListener();
const pipereader = new _notifTimer(() => {
    try{
        let rawdata = fs.readFileSync('/tmp/notif-pypipe');
        let data = JSON.parse(rawdata);
        console.log(data);

    }
    catch(e){
        
    }
}, 1)

nll.addnotifTimer(pipereader)
nll.startInterval();