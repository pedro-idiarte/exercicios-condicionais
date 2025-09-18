export function BuyAtaDiscount(valorOriginal: number, formaDePagamento: string): number {
    let valorFinal: number;

    if (formaDePagamento === "dinheiro" || formaDePagamento === "pix") {
        valorFinal = valorOriginal * 0.90; 
    } else if (formaDePagamento === "debito") {
        valorFinal = valorOriginal * 0.95; 
    } else if (formaDePagamento === "credito") {
        valorFinal = valorOriginal * 0.97; 
    } else {
        valorFinal = valorOriginal; 
    }
    return valorFinal / 100;
} 