

// // SVG class. Puts together all parts
// export class Svg{
//     constructor(text = '', textColor = '', shape = '', color = '') {
//         this.text = text;
//         this.textColor = textColor
//         this.shape = shape;
//         this.color = color;
//     }
//     // Sets text to the SVG 
//     setText(text, textColor) {
//         if (text.length > 3){
//             // error if less than 3 characters
//             throw new Error ("Text must not exceed 3 characters.")
            
//         }
//             this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        
//     }
//     // adds shape to SVG
//     setShape(shape) {
//         console.log(this.shape)
//         this.shape = shape.render();
//     }
//     // renders all parts of SVG
//     render() {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
//   }
// }



    export class Svg {
        constructor(){
            this.textElement=''
            this.shapeElement=''

        } 
        render(){
           return `<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

</svg>`

            // return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
        }
        setText(message, color){

            this.textElement=`<text x="10" y="10">${message}</text>`;

        }

        setShape(shape){
            this.shapeElement=shape.render();
                
        }
    }