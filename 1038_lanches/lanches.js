import {input} from './io_utils.js'
function main(){
    const numero = input('Digite um número:')
    const [codigo, quantidade_itens] = numero.split(' ').map(Number)
    const valor = preço(codigo, quantidade_itens)
}

function preço(codigo,quantidade){

    if(codigo===1){
        return console.log(`Total: R$ ${(4.00*quantidade).toFixed(2)}`)
    }else if(codigo===2){
        return console.log(`Total: R$ ${(4.50*quantidade).toFixed(2)}`)
    }else if(codigo===3){
        return console.log(`Total: R$ ${(5.00*quantidade).toFixed(2)}`)
    }else if(codigo===4){
        return console.log(`Total: R$ ${(2.00*quantidade).toFixed(2)}`)
    }else if(codigo===5){
        return console.log(`Total: R$ ${(1.50*quantidade).toFixed(2)}`)
    }
}

main()
