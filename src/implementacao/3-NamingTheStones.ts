export function NamingTheStones(ladoA: number, ladoB: number): string {

    if(ladoA === ladoB) {
        switch(ladoA) {
            case 0:
                return "Bucha de Branco";
            case 1:
                return "Bucha de Ás";
            case 2:
                return "Bucha de Duque";
            case 3:
                return "Bucha de Terno";
            case 4:
                return "Bucha de Quadra";
            case 5:
                return "Bucha de Quina";
            case 6:
                return "Bucha de Sena";
            default:
                return "NÃO";
        }
    } else {
        return "NÃO";
    }
}



