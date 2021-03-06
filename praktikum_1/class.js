class Holiday {
    constructor(destination, days) {
        this.destination =destination;
        this.days =days;
    }

    info(){
        alert(`${this.destination} wiil take ${this.days} days`);
    }
}

//sub class
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }
    info(){
        super.info();
        alert(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Sunscreen', 'Camera', 'Tent']);
tripWithGear.info();