import { evenOrOdd } from '../src/implementacao/1-evenOrOdd';

describe('evenOrOdd', () => {
  test('deve retornar "par" quando a soma for par', () => {
    expect(evenOrOdd(5, 3)).toBe("par"); // 5 + 3 = 8
  });

  test('deve retornar "ímpar" quando a soma for ímpar', () => {
    expect(evenOrOdd(2, 3)).toBe("ímpar"); // 2 + 3 = 5
  });

  test('deve funcionar com zero', () => {
    expect(evenOrOdd(0, 4)).toBe("par"); // 0 + 4 = 4
  });
});
