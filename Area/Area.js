import { print, input } from "./io_utils.js";

function main() {

    const A = Number(input('Digite o valor de A:'))
    const B = Number(input('Digite o valor de B:'))
    const C = Number(input('Digite o valor de C:'))
    const pi = 3.14159

    const area_triangle = (A * B) / 2
    const area_circle = pi * C ** 2
    const area_trapezium = ((B + A) * C) / 2
    const area_square = B ** 2
    const area_retangle = A * B



    print(`Triangulo:  ${area_triangle}`)
    print(`Circulo:  ${area_circle}`)
    print(`trapezio:  ${area_trapezium}`)
    print(`Quadrado:  ${area_square}`)
    print(`Retangulo:  ${area_retangle}`)





}
main()