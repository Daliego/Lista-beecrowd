import { print, input } from "./io_utils.js";

function main() {

    const raio = Number(input('Raio:'))
    const pi = 3.14159

    const volume = 4 / 3 * (pi * raio ** 3)



    print(`O volume é: ${volume.toFixed(2)}`)





}
main()