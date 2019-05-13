class Ball extends Vector {
    constructor(x, y, maxPower){
        super(x, y)
        this.direction = new Vector(0, 0);
        this.maxPower = maxPower;
        this.vel = new Vector(0,0);
        this.guideYes = 1
        this.radius = 7
        this.strokeCount = 0
        this.ballScale = .075
    };



    draw(c){
        if(this.guideYes == 1){

            c.strokeStyle = "black";
            c.lineWidth = 2
            c.beginPath();
            c.moveTo(this.x, this.y);
            const goTo = new Vector(this.x + this.direction.x, this.y + this.direction.y);
            c.lineTo(goTo.x, goTo.y);
            c.closePath();
            c.stroke();
        };


        c.fillStyle = "pink";
        c.strokeStyle = "pink";
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI*2, false);
        c.closePath();
        c.fill();



    }
    getDistance (x1, y1, x2, y2){
        let xDistance = x2-x1;
        let yDistance = y2- y1;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    update(mpos){
        this.direction = new Vector(mpos.x, mpos.y);
        this.direction.subVector(this);
        let dist = this.direction.magnitude();
        if (dist > 0 ){
            this.direction.toDirVec();
            this.direction.scale(this.maxPower);
            if (dist < this.maxPower){
                this.direction.scale(dist/this.maxPower);
            }



            //left wall
            if(this.x - this.radius < 500 ){
                this.vel.x *= -1        }

            }
            //top wall
            if(this.y - this.radius < 100){
                this.vel.y *= -1
            }

            //most bottom wall
            if(this.y + this.radius > courseY + courseH - 10){
                this.vel.y *= -1
            }
            //bigger right wall
            if(this.x + this.radius > courseX + courseW && this.y > 250){
                this.vel.x *= -1
            }
            if(this.y + this.radius > 240 && this.x > 650){
                this.vel.y *= -1
            }

            if(this.x + this.radius > 850) {
                this.vel.x *= -1
            }
let inTrap = false
            if(this.getDistance(this.x, this.y, trap.x, trap.y) < trap.radius){
                inTrap = true;
            };
            this.addVector(this.vel);
            if (inTrap){
                this.vel.scale(.7);
            }else {
                this.vel.scale(.99);
            }

            if (this.vel.magnitude() < .075){
                this.vel.scale(0);
            }
            if (this.vel.magnitude() == 0) {
                this.guideYes = 1
            }

            if(this.getDistance(this.x, this.y, hole.x, hole.y) < -this.radius + hole.radius){
                return true;
            };
            return false;
        };
        hit(){
            let ballMove = new Vector (this.direction.x, this.direction.y);

            ballMove.scale(this.ballScale);
            this.vel.addVector(ballMove);
            this.guideYes = 0;
            this.strokeCount ++

        };
    };
