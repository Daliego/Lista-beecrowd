import prompt from 'prompt-sync'
const input = prompt()
function main(){
     //10.0 20.1 5.1
    const numeros = input('Digite os numeros:') 
    const [A, B, C] = numeros.split(' ').map(Number)
    const baskara = formula_baskara(A, B, C)
}

function formula_baskara(a, b , c){
     const delta = Math.pow(b, 2) - 4*a*c

     
     let x1 = (-b + Math.sqrt( delta ))/(2*a)
     let x2 = (-b - Math.sqrt( delta ))/(2*a)
     if(delta>0 && a!==0){
          x1 = (-b + Math.sqrt( delta ))/(2*a)
          x2 = (-b - Math.sqrt( delta ))/(2*a)
          console.log(`R1 = ${x1.toFixed(5)}`)
          console.log(`R2 = ${x2.toFixed(5)}`)

     }else if(delta===0 && a!==0){
          x1 = (-b)/(2*a)
          console.log(`R1 = ${x1.toFixed(5)}`)
     }else if(delta<0){
          console.log('Impossivel calcular')
     }else if(a===0){
          console.log('Impossivel calcular')

     }
}

main()