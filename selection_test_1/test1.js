import{print, input} from './io_utils.js'

function main(){
    const A = Number(input('Digite um número aqui:'))
    const B = Number(input('Digite um número aqui:'))
    const C = Number(input('Digite um número aqui:'))
    const D = Number(input('Digite um número aqui:'))

    if(B>C && D>A && C+D>A+B && C>0 && D>0 && A>0){
        console.log("Valores aceitos") 
    }else{
        console.log("Valores nao aceitos")
    }
    

    
    
        
        
            

         
}
main()