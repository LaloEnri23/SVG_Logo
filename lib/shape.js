    export class Shape{
        constructor(){
            this.colors=''
        }
        setColor(colors){
            this.colors=(colors);
        }
    }

    export class Circle extends Shape{

        render(){
            return `<circle cx="50%" cy="50%" r="100%" height="100% width="100%" fill="${this.colors}/>`
        }
    }

    export class Square extends Shape{
        render(){
            return `<square x="50" height="200" width="200" fill="${this.colors}" />`
        }
    }

    export class Triangle extends Shape{
        render(){
            return `<triangle height="100%" width="100%" points=0,200 300,200 150,0" fill="${this.colors}/>`
        }
    };

// export default{Circle,Square,Triangle}