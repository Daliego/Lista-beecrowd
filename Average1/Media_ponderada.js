import { print, input } from "./io_utils.js";

function main() {
    const Grade1 = Number(input('Grade 1:'))
    const Grade2 = Number(input('Grade 2:'))
    const Media_ponderada = ((Grade1 * 3.5) + (Grade2 * 7.5)) / (7.5 + 3.5)





    print(`The Media_ponderada is ${Media_ponderada.toFixed(2)}`)





}
main()