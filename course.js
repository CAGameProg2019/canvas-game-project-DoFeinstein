class Course {
    constructor(x, y, width, height, x2, y2, width2, height2){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.x2 = x2;
        this.y2 = y2;
        this.width2 = width2;
        this.height2 = height2;

    };
    draw(c){


        c.fillStyle = "green";
        c.fillRect(this.x,this.y, this.width, this.height);
        c.fillRect(this.x2, this.y2, this.width2, this.height2);
        c.fillStyle = "orange";

        c.beginPath();
        c.arc(trap.x,trap.y, trap.radius, 0, Math.PI*2, false);
        c.closePath();
        c.fill();
        c.strokeStyle = "black"
        c.lineWidth = 10
        c.beginPath();
        c.moveTo(this.x2-5, this.y2-5);
        c.lineTo(this.x-5, this.y + this.height-5);
        c.lineTo(this.x + this.width+5, this.y + this.height-5);
        c.lineTo(this.x + this.width+5, this.y2 + this.height2-5);
        c.lineTo(this.x2 + this.width2 +5, this.y2 + this.height2-5);
        c.lineTo(this.x2 + this.width2 +5, this.y2-5);
        c.closePath();
        c.stroke();

    }
};
