import {input} from './io_utils.js'
function main(){
    const numero = input('Digite um número:')
    const [x, y] = numero.split(' ').map(Number)
    const quadrantes = coordenadas(x, y)
}

function coordenadas(x, y){
    if(x>0 && y>0){
        return console.log('Q1')
    }else if(x<0 && y>0){
        return console.log('Q2')
    }else if(x<0 && y<0){
        return console.log('Q3')
    }else if(x>0 && y<0){
        return console.log('Q4')
    }else if(x===0 && y===0){
        return console.log('Origem')
    }else if(x===0){
        console.log('Eixo Y')
    }else if(y===0){
        console.log('Eixo X')
    }
}

main()
