import{print, input} from './io_utils.js'
function main(){
    //Dinheiro
     const valor_dinheiro = Number(input('Digite o numero'))
     
     const $100 = Math.floor(valor_dinheiro/100)
     const resto_$100 = valor_dinheiro % 100
 
     const $50 = Math.floor(resto_$100/50)
     const resto_$50 = resto_$100 % 50
 
     const $20 = Math.floor(resto_$50/20)
     const resto_$20 = resto_$50 % 20
 
     const $10 = Math.floor(resto_$20/10)
     const resto_$10 = resto_$20 % 10
 
     const $5 = Math.floor(resto_$10/5)
     const resto_$5 = resto_$10 % 5
 
     const $2 = Math.floor(resto_$5/2)
     const resto_$2 = resto_$5 % 2
 
    
     //Moedas
     
     const real1 = Math.floor(resto_$2/1.00)
     const resto_1 = resto_$2 % 1.00
 
     const real050  = Math.floor(resto_1/0.50)
     const resto_050 = resto_1 % 0.50
 
     const real025 = Math.floor(resto_050/0.25)
     const resto_025 = resto_050 % 0.25
 
     const real010 = Math.floor(resto_025/0.10)
     const resto_010 = resto_025 % 0.10
 
     const real005 = Math.floor(resto_010/0.05)
     const resto_005 = resto_010 % 0.05
 
     const real001 = Math.floor(resto_005/0.01)
    
     
     console.log(`NOTAS:`)
     console.log(`${$100} nota(s) de R$ 100,00`)
     console.log(`${$50} nota(s) de R$ 50,00`)
     console.log(`${$20} nota(s) de R$ 20,00`)
     console.log(`${$10} nota(s) de R$ 10,00`)
     console.log(`${$5} nota(s) de R$ 5,00`)
     console.log(`${$2} nota(s) de R$ 2,00`)
     console.log(`MOEDAS:`)
     console.log(`${real1} moeda(s) de R$ 1.00`)
     console.log(`${real050} moeda(s) de R$ 0.50`)
     console.log(`${real025} moeda(s) de R$ 0.25`)
     console.log(`${real010} moeda(s) de R$ 0.10`)
     console.log(`${real005} moeda(s) de R$ 0.05`)
     console.log(`${real001} moeda(s) de R$ 0.01`)
     
 
 }
 main()
     
     