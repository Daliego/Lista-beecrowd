var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    
    const A = Number(lines[2]).toFixed(1)
    const B = Number(lines[0]).toFixed(1)
    const C = Number(lines[1]).toFixed(1)
    
    const pi = Number(3.14159)

    const area_triangle = (A * B) / 2
    const area_circle = pi * C * C 
    const area_trapezium = ((A + B) * C) / 2
    const area_square = B * B
    const area_retangle = A * B

    console.log(`TRIANGULO: ${area_triangle.toFixed(3)}`);
    console.log(`CIRCULO: ${area_circle.toFixed(3)}`);
    console.log(`TRAPEZIO: ${area_trapezium.toFixed(3)}`);
    console.log(`QUADRADO: ${area_square.toFixed(3)}`);
    console.log(`RETANGULO: ${area_retangle.toFixed(3)}`);

}
main();