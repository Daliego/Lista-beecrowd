var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    //time in days
        const N = Number(lines[0])
        
        const years = Math.floor(N/365)
        const resto_years = N % 365
        
        const mouths = resto_years/30
        const resto_mouths = resto_years % 30
        const days = resto_mouths
        
        
    console.log(`${years} ano(s)`)
    console.log(`${mouths} mes(es)`)
    console.log(`${days} dia(s)`)
    
}
main()
