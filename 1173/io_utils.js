import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function get_number(frase){
    const numero = Number(input(frase))
    return numero
}

export function criar_vetor(){
    const tamanho = Number(input('Digite o tamanho do vetor: '))
    return new Array(tamanho)
}

export function preencher_vetor(vetor){
    const maximo = get_number('Digite o valor máximo do vetor')
    const minimo = get_number('Digite o valor minimo do vetor')
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = numero_aleatorio(maximo, minimo)
    }
}

function numero_aleatorio(maximo, minimo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo) 
}

export function ordenador_de_vetores(vetor){
    let auxiliar
    for (let i = vetor.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (vetor[j] > vetor[j+1]){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
    return vetor
}