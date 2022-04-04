import { print, input } from "./io_utils.js";

function main() {
    const Grade1 = Number(input('Grade 1:'))
    const Grade2 = Number(input('Grade 2:'))
    const Grade3 = Number(input('Grade 3:'))
    const Media_ponderada = ((Grade1 * 2) + (Grade2 * 3) + (Grade3 * 5)) / (10)





    print(`The Media_ponderada is ${Media_ponderada.toFixed(2)}`)





}
main()