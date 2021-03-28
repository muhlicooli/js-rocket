class Toggle {
    constructor() {
        this.state = false;
        this.nightBg = 'linear-gradient(180deg, rgba(15,10,113,1) 0%, rgba(76,36,193,1) 48%, rgba(23,184,195,1) 100%)';
        this.dayBg = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
        this.nightFontColor = '#4a23bf';
        this.dayFontColor = '#87CEEB';
        this.buttons = undefined;
    } 
    toggle() {
        this.buttons = document.getElementsByTagName('a');

        if(!this.state) {
            document.body.style.background = this.nightBg;
            this.changeButtonColor(this.nightFontColor);
        } else {
            document.body.style.background = this.dayBg;
            document.body.style.background = this.dayBg; 
            this.changeButtonColor(this.dayFontColor);
        };
        this.state = !this.state;
    }
    changeButtonColor(color) {
        for (let element of this.buttons) {
            element.style.color = color;
        }
    }
}

let toggle = new Toggle();
