export function verificaAcesso(idade: number, possuiPatologia: boolean, altura: number, ehEstudante: boolean): string {
    if (idade < 12 ||idade > 65 || possuiPatologia || altura < 150) {
        return "ACESSO NEGADO";
    }else if (ehEstudante || idade < 18) {
        return "10 reais";
    }else {
        return "20 reais";
    }
}