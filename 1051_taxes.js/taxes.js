import{print, input} from './io_utils.js'
        function main(){
            const salario = Number(input('Digite seu salario:'))
            let ir = 'Isento' 
            if(salario <= 2000){
                console.log(`Isento`)
            }else if(salario <= 3000){
                ir = (salario - 2000)*0.08
                console.log(`R$ ${ir.toFixed(2)}`)
            }else if(salario <= 4500){
                ir = (1000 * 0.08) + (salario - 3000) * 0.18
                console.log(`R$ ${ir.toFixed(2)}`)
            }else //(salario>4500)
            {
                ir = (1000 * 0.08) + (1500 * 0.18) + (salario - 4500) * 0.28
                console.log(`R$ ${ir.toFixed(2)}`)
            }
        }
        main()

