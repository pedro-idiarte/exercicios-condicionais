import { verificaAcesso } from "../src/implementacao/5-VeryScaryRollerCoaster";

describe('Montanha Russa Muito Assustadora', () => {
    test('deve negar o acesso se a idade for menor que 12', () => {
        const idade = 11;
        const possuiPatologia = false;
        const altura = 180;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('ACESSO NEGADO');
    });
    test('deve negar o acesso se a idade for maior que 65', () => {
        const idade = 66;
        const possuiPatologia = false;
        const altura = 180;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('ACESSO NEGADO');
    });
    test('deve negar o acesso se a pessoa tiver patologia cardíaca', () => {
        const idade = 25;
        const possuiPatologia = true;
        const altura = 180;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('ACESSO NEGADO');
    });
    test('deve negar o acesso se a altura for menor que 150cm', () => {
        const idade = 25;
        const possuiPatologia = false;
        const altura = 149;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('ACESSO NEGADO');
    });
    test('deve cobrar 10 reais para estudante', () => {
        const idade = 20;
        const possuiPatologia = false;
        const altura = 180;
        const ehEstudante = true;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('10 reais');
    });
    test('deve cobrar 10 reais para menor de 18 anos que não seja estudante', () => {
        const idade = 17;
        const possuiPatologia = false;
        const altura = 180;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('10 reais');
    });
    test('deve cobrar 20 reais para quem não é estudante e tem 18 anos ou mais', () => {
        const idade = 18;
        const possuiPatologia = false;
        const altura = 180;
        const ehEstudante = false;
        const resultado = verificaAcesso(idade, possuiPatologia, altura, ehEstudante);
        expect(resultado).toBe('20 reais');
    });
});
