"use strict";
//Interface are Like the giudeLines ypu have to folow while using them 
//You have to Use all the variables mentioned in the Interface 
class Instagram {
    constructor(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
}
//you can add your own variables to it but you must contain all the variables implemented from the interface 
class Youtube {
    constructor(camera, filter, burst, counts //Not in the interface 
    ) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
        this.counts = counts;
    }
}
