import { NamingTheStones } from '../src/implementacao/3-NamingTheStones';

describe('NamingTheStones - Buchas de Dominó', () => {
  test('deve identificar uma bucha de terno', () => {
    expect(NamingTheStones(3, 3)).toBe("Bucha de Terno");
  });

  test('deve identificar uma bucha de sena', () => {
    expect(NamingTheStones(6, 6)).toBe("Bucha de Sena");
  });

  test('deve identificar uma bucha de ás', () => {
    expect(NamingTheStones(1, 1)).toBe("Bucha de Ás");
  });

  test('deve retornar NÃO quando não for bucha', () => {
    expect(NamingTheStones(2, 5)).toBe("NÃO");
  });
});
