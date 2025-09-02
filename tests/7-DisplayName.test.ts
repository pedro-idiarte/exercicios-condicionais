import { DisplayName } from "../src/implementacao/7-DisplayName";

describe('Gerar Nome Completo', () => {

    test('deve retornar o nome completo corretamente sem apelido', () => {
        const primeiroNome = "Mario";
        const sobrenome = "Bros";
        const apelido = "";
        const esperado = "Mario Bros";
        const resultado = DisplayName(primeiroNome, sobrenome, apelido);
        expect(resultado).toBe(esperado);
    });

    test('deve retornar o nome completo com apelido', () => {
        const primeiroNome = "Super";
        const sobrenome = "Man";
        const apelido = "Superman";
        const esperado = 'Super "Superman" Man';
        const resultado = DisplayName(primeiroNome, sobrenome, apelido);
        expect(resultado).toBe(esperado);
    });
    
    test('não deve incluir aspas se o apelido for uma string vazia', () => {
        const primeiroNome = "Peter";
        const sobrenome = "Parker";
        const apelido = "";
        const esperado = "Peter Parker";
        const resultado = DisplayName(primeiroNome, sobrenome, apelido);
        expect(resultado).toBe(esperado);
    });
});