import {input} from './io_utils.js'
function main(){
    const numero = input('Digite um número:')
    const [numero1, numero2, numero3] = numero.split(' ').map(Number)
    const crescente = ordem_crescente(numero1, numero2, numero3)
}
function pulalinha(){
        console.log();
}

function ordem_crescente(numero1, numero2, numero3){
    if(numero1>numero2 && numero2>numero3){
         console.log(`${numero3}`)
         console.log(`${numero2}`)
         console.log(`${numero1}`)
        pulalinha()
         console.log(`${numero1}`)
         console.log(`${numero2}`)
         console.log(`${numero3}`)
    }else if(numero1>numero3 && numero3>numero2){
        console.log(`${numero2}`)
        console.log(`${numero3}`)
        console.log(`${numero1}`)
        pulalinha()
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)
    }else if(numero2>numero1 && numero1>numero3){
        console.log(`${numero3}`)
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        pulalinha()
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)
    }else if(numero2>numero3 && numero3>numero1){
        console.log(`${numero1}`)
        console.log(`${numero3}`)
        console.log(`${numero2}`)
        pulalinha()
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)
    }else if(numero3>numero1 && numero1>numero2){
        console.log(`${numero2}`)
        console.log(`${numero1}`)
        console.log(`${numero3}`)
        pulalinha()
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)
    }else if(numero3>numero2 && numero2>numero1){
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)
        pulalinha()
        console.log(`${numero1}`)
        console.log(`${numero2}`)
        console.log(`${numero3}`)  
    }
}

main()
