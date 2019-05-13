let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
let ball;
let hole;
let course;
var courseX = 500;
var courseY = 200;
var courseW = 150;
var courseH = 350;
let mpos;


function init() {
    mpos = new Vector(canvas.width/2, canvas.height/2);

    hole = new Hole(courseX + ((courseW/2) * 4), courseY - 25);
    ball = new Ball(courseX + (courseW/2),courseY + (courseH - 50), 100);
    course = new Course(courseX, courseY, courseW, courseH, courseX, courseY - 100, courseH, courseW);
    trap = new Trap(500 + Math.random()*150,100 + Math.random()* 300);


    c.font = "40px Arial"
    update();
}


function update() {
    c.clearRect(0, 0, canvas.width,canvas.height);
    trap.draw(c);

    course.draw(c);
    hole.draw(c);
    ball.draw(c);
    c.fillStyle = "white"
    c.fillRect(0, 0, 495, canvas.height);
    c.fillRect(0, 0, canvas.width, 95);
    c.fillRect(655, 245, canvas.width, canvas.height);
    c.fillRect(855, 0, 860, canvas.height);
    c.fillRect(0, 545, canvas.width, canvas.height);



    let gameOver = ball.update(mpos);

    if (!gameOver){
        requestAnimationFrame(update);
    }else {
        alert("you win! It took you " + ball.strokeCount + " strokes.")
    };

    //text thing here
    c.fillStyle = "black"
    c.fillText(ball.strokeCount, 900, 150);


}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    })
    window.addEventListener('mousedown', function(event){
        if (ball.guideYes == 1) {
            ball.hit();
}
  });


});
