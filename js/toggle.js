class Vehicle {
    constructor() {
        
    }
}

class Toggle {
    constructor() {
        this.state = false;
        this.nightBg = 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)';
        this.dayBg = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
    } 
    toggle() {
        let right = document.getElementById('right');
        let left = document.getElementById('left');
        if(!this.state) {
            right.style.background = this.nightBg;
            left.style.background = this.nightBg;

        } else {
            right.style.background = this.dayBg;
            left.style.background = this.dayBg; 
        };
        this.state = !this.state;
    }
}

let toggle = new Toggle();