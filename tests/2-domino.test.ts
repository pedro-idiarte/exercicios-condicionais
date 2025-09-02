import { domino } from '../src/implementacao/2-domino';
describe('isBucha', () => {
  test('deve retornar "SIM" quando os dois lados forem iguais', () => {
    expect(domino(3, 3)).toBe("SIM");
  });

  test('deve retornar "NÃO" quando os dois lados forem diferentes', () => {
    expect(domino(2, 5)).toBe("NÃO");
  });

  test('deve retornar "SIM" para bucha de zero (0,0)', () => {
    expect(domino(0, 0)).toBe("SIM");
  });
});
