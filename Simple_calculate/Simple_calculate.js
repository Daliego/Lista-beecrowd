import { print, input } from "./io_utils.js";

function main() {
    print('Produto 1')
    const Units_product1 = Number(input('Units of product one:'))
    const price_product1 = Number(input('Price of product one:'))

    const Units_product2 = Number(input('Units of product two:'))
    const price_product2 = Number(input('Price of product two:'))

    const Total_paid = (Units_product1 * price_product1) + (Units_product2 * price_product2)





    print(`The total paid were ${Total_paid.toFixed(2)}`)





}
main()