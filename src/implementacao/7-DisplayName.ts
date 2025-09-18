export function DisplayName(primeiroNome: string, sobrenome: string, apelido: string): string {
    if(apelido) {
        return `${primeiroNome} "${apelido}" ${sobrenome}`;
    }else if(sobrenome) {
        return `${primeiroNome} ${sobrenome}`;
    }else {
        return primeiroNome;
    }
}