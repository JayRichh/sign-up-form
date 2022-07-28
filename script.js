"use strict";

function drawBall () {
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var width = canvas.width;
  console.log(width);
  var height = canvas.height;
  console.log(height);

  var x = Math.floor(Math.random() * width);
  var y = Math.floor(Math.random() * height);
  var dx = Math.random() * 2 - 1;
  var dy = Math.random() * 2 - 1;
  var radius = Math.floor(Math.random() * 2 + 1);

  var drawBall = function () {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  };
  var draw = function () {
    ctx.clearRect(0, 0, width, height);
    drawBall();
    if (x + radius > width || x - radius < 0) {
      dx = -dx;
    }

    if (y + radius > height || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  };
  setInterval(draw, 20);
};

window.onload = function () {
  var btn = document.getElementById("btn");
  btn.onclick = function () {
    drawBall();
    console.log("clicked");
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone-number").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var error = document.getElementById("error");
    var errorMessage = "";
    var errorCount = 0;

    if (firstName === "") {
      errorMessage += "Name is required. " + "\n";
      errorCount++;
    }

    if (lastName === "") {
      errorMessage += "Last name is required. " + "\n";
      errorCount++;
    }

    if (email === "") {
      errorMessage += "Email is required. " + "\n";
      errorCount++;
    }

    if (phone === "") { 
      errorMessage += "Phone is required. " + "\n";
      errorCount++;
    }

    if (password === "") {
      errorMessage += "Password is required. " + "\n";
      errorCount++;
    }

    if (confirmPassword === "") {
      errorMessage += "Confirm Password is required. " + "\n";
      errorCount++;
    }

    if (password !== confirmPassword) {
      errorMessage += "Password and Confirm Password must match. " + "\n";
      errorCount++;
    }

    if (errorCount > 0) {
      error.innerText = errorMessage;
    }
  };
};
