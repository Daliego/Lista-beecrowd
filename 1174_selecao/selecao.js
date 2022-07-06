import prompt from 'prompt-sync'
import { 
     get_number, criar_vetor,
     preencher_vetor, ordenador_de_vetores
 } from './io_utils.js'
import { readFileSync } from 'fs'
const input = prompt()

function main(){
     const vetor = new Array(100) 
     const lines = readFileSync('imports.txt', 'utf-8').split('\r\n').map(Number)
     for (let i = 0; i < 100; i++){
          if (lines[i] <= 10.0){
               console.log(`A[${i}] = ${lines[i].toFixed(1)}`)
          }
          console.log(i)
     }

}
main()