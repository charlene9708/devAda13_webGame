// Script that draws the 3 towers and disks 
var numDisks = 5;
var tower1 = [];
var tower2 = [];
var tower3 = [];

// Initialize towers
for (var i = numDisks; i > 0; i--) {
    tower1.push(i);
}

// Canvas variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");//create a 2d rending context obj
var towerWidth = 150;
var towerHeight = 300;
var diskHeight = 30;
var diskWidths = [120, 100, 80, 60, 40];
var colors = ["red", "orange", "yellow", "green", "blue"];

// Draw the towers and disks
function draw() {

    // Draw the towers
    // Draw a filled rectangle: fillRect(x, y, width, height). x, y= the coordinates in the top left corner of the rectangle
    ctx.fillStyle = "Burlywood";//fill color
    ctx.fillRect(150, 50, 10, towerHeight);
    ctx.fillRect(350, 50, 10, towerHeight);
    ctx.fillRect(550, 50, 10, towerHeight);
    //lower pedestals
    ctx.fillRect(70, 350, 580, 18);

    // Draw the disks on tower 1
    for (var i = 0; i < numDisks; i++) {
        var diskWidth = diskWidths[i];
        var color = colors[i];

        if (tower1.length > i) {
            var x = 155 - diskWidth / 2;
            var y = towerHeight - i * diskHeight + 20;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, diskWidth, diskHeight);
        }
    }
    }

draw();