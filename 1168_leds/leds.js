import {input} from './io_utils.js'
import {readFileSync} from 'fs'

function main(){
    const lines = readFileSync('imports.txt', 'utf-8').split('\r\n')
    let count = 1
    for (let i = 0; i < lines[0]; i++){
        const total_leds = quantos_leds(lines[count])
        count++
        console.log(total_leds + ' leds')
    }
}

function quantos_leds(numeros){
    let total_de_leds = 0
    for (let i = 0; i < numeros.length; i++){
        let leds_por_unidade = identificador(Number(numeros[i]))
        total_de_leds += leds_por_unidade
    }
    return total_de_leds
}

function identificador(numero){
    if (numero === 1){
        return 2
    }else if (numero === 2 || numero === 3 || numero === 5){
        return 5
    }else if (numero === 4){
        return 4
    }else if (numero === 6 || numero === 9 || numero === 0){
        return 6
    }else if (numero === 7){
        return 3
    }else if (numero === 8){
        return 7
    }
}
main()