import prompt from 'prompt-sync'
import { 
     get_number, criar_vetor,
     preencher_vetor, ordenador_de_vetores
 } from './io_utils.js'
import { readFileSync } from 'fs'
const input = prompt()

function main(){
     const lines = readFileSync('imports.txt', 'utf-8').split('\r\n').map(Number)
     for (let i = 0; i < lines.length; i++){
          if (lines[i] <= 0){
               lines[i] = 1
          }
          console.log(`X[${i}] = ${lines[i]}`)
     }

}
main()