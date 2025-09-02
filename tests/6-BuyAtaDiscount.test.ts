import { BuyAtaDiscount } from '../src/implementacao/6-BuyAtaDiscount';

describe('Cálculo de Desconto - BuyAtaDiscount', () => {

    test('deve calcular o valor com 5% de desconto para pagamento em débito', () => {
        const valorOriginal = 13000;
        const formaDePagamento = 'debito'; 
        const esperado = 123.50; 
        const resultado = BuyAtaDiscount(valorOriginal, formaDePagamento);
        expect(resultado).toBeCloseTo(esperado, 2);
    });

    test('deve calcular o valor com 3% de desconto para pagamento em crédito', () => {
        const valorOriginal = 10000; 
        const formaDePagamento = 'credito';
        const esperado = 97.00;
        const resultado = BuyAtaDiscount(valorOriginal, formaDePagamento);
        expect(resultado).toBeCloseTo(esperado, 2);
    });

    test('deve calcular o valor com 10% de desconto para pagamento em Pix', () => {
        const valorOriginal = 10000;
        const formaDePagamento = 'pix';
        const esperado = 90.00;
        const resultado = BuyAtaDiscount(valorOriginal, formaDePagamento);
        expect(resultado).toBeCloseTo(esperado, 2);
    });

    test('deve calcular o valor com 10% de desconto para pagamento em dinheiro', () => {
        const valorOriginal = 10000;
        const formaDePagamento = 'dinheiro';
        const esperado = 90.00;
        const resultado = BuyAtaDiscount(valorOriginal, formaDePagamento);
        expect(resultado).toBeCloseTo(esperado, 2);
    });

    test('não deve aplicar desconto para forma de pagamento inválida', () => {
        const valorOriginal = 10000;
        const formaDePagamento = 'boleto';
        const esperado = 100.00;
        const resultado = BuyAtaDiscount(valorOriginal, formaDePagamento);
        expect(resultado).toBeCloseTo(esperado, 2);
    });
});
