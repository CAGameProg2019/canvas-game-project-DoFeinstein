class Trap {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 50;
    };
    draw(c){
        c.fillStyle = "orange";

        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI*2, false);
        c.closePath();
        c.fill();

    }
};
