// Aula 09 - 26-08-2021 - Checkpoint 1
// Grupo 8 - Alexandre Pedro, Anna Lopes, Caroline Machado da Silva, Mateus Benites Dias
// Objetivo - Microondas

// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida 
// com seus respectivos tempos pré-definidos:

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão);

function microondas(opcaoDesejada, tempoInserido) {
    let tempo;
    switch (opcaoDesejada) {
        case 1:
            tempo = 10;
            break;
        case 2:
            tempo = 8;
            break;
        case 3:
            tempo = 15;
            break;
        case 4:
            tempo = 12;
            break;
        case 5:
            tempo = 8;
            break;
        default:
            return 'Prato inexistente';
    }

    if (tempoInserido > (3 * tempo)) {
        return 'kabumm';
    } else if (tempoInserido > (2 * tempo)) {
        return'A comida queimou';
    } else if (tempoInserido < tempo) {
        return 'Tempo insuficiente';
    } else {
        return 'Prato pronto, bom apetite!!!';
    }
}

// #### SEÇÃO DO USUÁRIO 

microondas(1, 10); // CASE 1 - PIPOCA. Tempo padrão 10s
microondas(2, 5); // CASE 2 - MACARRÃO. Tempo padrão 8s
microondas(3, 35); // CASE 3 - CARNE. Tempo padrão 15s
microondas(4, 67); // CASE 4 - FEIJÃO. Tempo padrão 12s
microondas(5, 10); // CASE 5 - BRIGADEIRO. Tempo padrão 8s
microondas(0, 20); // CASE 6 - Prato inexistente