var col = 0;

var setup = function(){
    createCanvas(600, 400);
    return setup;
};

var draw = function(){
    //background
    col= map(mouseX, 0, 600, 0, 255);
    background(col);
    // ellipse
    fill(250,118,222);
    ellipse(mouseX, 200, 64, 64);
    return draw;

};

