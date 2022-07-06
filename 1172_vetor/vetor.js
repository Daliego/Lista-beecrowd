import prompt from 'prompt-sync'
import { 
     get_number, criar_vetor,
     preencher_vetor, ordenador_de_vetores
 } from './io_utils.js'
import { readFileSync } from 'fs'
const input = prompt()

function main(){
     const vetor = criar_vetor()
     const numero = readFileSync('imports.txt', 'utf-8').split('\r\n').map(Number)
     vetor[0] = numero
     console.log(`N[0] = ${numero}`)
     for (let i = 1; i < vetor.length; i++){
          vetor[i] = vetor[i - 1] * 2
          console.log(`N[${i}] = ${vetor[i]}`)
     }

}
main()