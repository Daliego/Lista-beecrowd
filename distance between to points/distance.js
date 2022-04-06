import{print, input} from './io_utils'
function main() {
    const [x1, x2] = lines[0].split(" ").map(Number);
    const [y1, y2] = lines[1].split(" ").map(Number);
    const multiplicacaox = (x2 - x1)**2
    const multiplicacaoy = (y2 - y1)**2

    const distance = Math.sqrt(multiplicacaox + multiplicacaoy).toFixed(4);

    console.log( `${distance}` );
}
main();

