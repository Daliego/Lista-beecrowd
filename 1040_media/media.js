import {input} from './io_utils.js'
function main(){
    const numero = input('Digite um número:')
    const [nota1, nota2, nota3, nota4] = numero.split(' ').map(Number)
    const media = aprovado_reprovado(nota1, nota2, nota3, nota4)
}

function aprovado_reprovado(nota1, nota2, nota3, nota4){
    const media1 = (nota1*2 + nota2*3 + nota3*4 + nota4*1)/10

    if(media1>=7.0){
         console.log(`Media: ${media1.toFixed(1)}`)
         console.log(`Aluno aprovado.`)
    }else if(media1<5.0){
         console.log(`Media: ${media1.toFixed(1)}`)
         console.log(`Aluno reprovado.`)
    }else if(media1<=6.9 && media1>=5.0){
            const nota_do_exame = Number(input('Digite a nota do exame:'))
            const media_final = (nota_do_exame + media1)/2
            if(nota_do_exame>=5.0){
                 console.log(`Media: ${media1.toFixed(1)}`)
                 console.log(`Aluno em exame.`)
                 console.log(`Nota do exame: ${nota_do_exame.toFixed(1)}`)
                 console.log('Aluno aprovado.')
                 console.log(`Media final: ${media_final.toFixed(1)}`)
                

            }else if(nota_do_exame<5.0){
                 console.log(`Media: ${media1.toFixed(1)}`)
                 console.log(`Aluno em exame.`)
                 console.log(`Nota do exame: ${nota_do_exame.toFixed(1)}`)
                 console.log('Aluno reprovado.')
                 console.log(`Media final: ${media_final.toFixed(1)}`)
            }
    }
}

main()
