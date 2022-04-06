var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    //time in seconds
        const N = Number(lines[0])
        
        const hours = Math.floor(N/3600)
        const resto_horas = N % 3600
        
        const minutes = resto_horas/60
        const resto_minutes = resto_horas % 60
        const seconds = resto_minutes
        
        
    console.log(`${hours}:${minutes}:${seconds}`)

    
}
main()
