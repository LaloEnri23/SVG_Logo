import inquirer from "inquirer";
import fs from "fs";
import  {Circle}  from "./lib/shape.js";
console.log(Circle);
import { Square } from "./lib/shape.js";
import { Triangle } from "./lib/shape.js";
import {Svg} from "./lib/svg.js";
// const { circle, square, triangle } = require("./lib/shape");
// const { inherits } = require("util");
// const { default: inquirer } = require("inquirer");

// const shapes = function (data) {
//     if (data.shape === "circle") {
//     const circleObj = new circle();
//     circleObj.setColor(data.shapeColor);
//     return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${circleObj.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
//     } else if (data.shape === "square") {
//     const squareObj = new square();
//     squareObj.setColor(data.shapeColor);
//     return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${squareObj.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
//     } else if (data.shape === "triangle") {
//     const triangleObj = new triangle();
//     triangleObj.setColor(data.shapeColor);
//     return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${triangleObj.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`;
//     }
// };

//function to prompt the user for their readme
const questions = function () {
    inquirer
        .prompt([
        {
            type: "input",
            name: "text",
            message: "text: Input up to 3 characters ONLY:",
        },
        {
            type: "input",
            name: "textColor",
            message: "text-color: Input color keyword or hexadecimal number:",
        },
        {
            type: "input",
            name: "shapeColor",
            message: "shape-color: Input color keyword or hexadecimal number:",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose which shape you want!",
            choices: ["circle", "square", "triangle"],
        },
    ])
    //response to write the function
    .then ((response) =>
        writeFiles(response))
};

//user response to create the SVG file

function writeFiles(data) {
    const svg = new Svg ();
    svg.setText (data.text, data.textColor);

    let userShape = data.shape;
    if (userShape === "circle") {
        userShape = new Circle(data.shapeColor);  
} else if (userShape === "square") {
    userShape = new Square(data.shapeColor);
} else if (userShape === "triangle") {
    userShape = new Triangle(data.shapeColor);
}

userShape.setColor(data.shapeColor);

fs.writeFile("logo.svg", svg.render(), (err) =>
err ? console.log(err) : console.log("Successfuly generated logo!")
);
}

questions();

