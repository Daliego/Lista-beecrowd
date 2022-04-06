import{print, input} from ''
var lines = input.split('\n');

function main() {
    
   const X = Number(lines[0])
   const Y = Number(lines[1])

   const kml = (X/Y).toFixed(3)

   console.log(`${kml} km/l`)
}
main()
    
    
