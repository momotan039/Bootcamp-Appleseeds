function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}



Square.prototype.isSquare = function () {
    if (
        this.a === this.b &&
        this.b === this.c &&
        this.c === this.d)
        return true
    return false
}


// const ProtoTypeSquare = {
//     isSquare() {
//         if (this.a === this.b &&
//             this.b === this.c &&
//             this.c === this.d)
//             return true
//         return false
//     }
// }
// Object.assign(Square.prototype, ProtoTypeSquare)


const s = new Square(90, 90, 90, 90)
console.log(s.isSquare());