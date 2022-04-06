var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    
     const [a, b, c] = lines(0).split(' ').map(Number)
    
    const maiorAB = (a + b + Math.abs(a - b))/2
    const maioBC = (c + maiorAB + (c - maiorAB))/2

        console.log(`${maiorBC} eh o maior`)
}
main();