import { TaxExemption } from '../src/implementacao/4-TaxExemption';

describe('TaxExemption', () => {
  test('deve ser ISENTA quando renda mensal for menor ou igual a 3036', () => {
    // 3000 mensais = 36000 anuais
    expect(TaxExemption(false, false, 36000)).toBe("ISENTA");
  });

  test('deve ser ISENTA quando rendimentos anuais forem menores ou iguais a 33888', () => {
    expect(TaxExemption(false, false, 33000)).toBe("ISENTA");
  });

  test('deve ser ISENTA quando aposentada e/ou portadora de doença grave', () => {
    expect(TaxExemption(true, false, 50000)).toBe("ISENTA");
    expect(TaxExemption(false, true, 50000)).toBe("ISENTA");
  });

  test('deve ser PEGA LEAO quando não se enquadra nas isenções', () => {
    expect(TaxExemption(false, false, 40000)).toBe("PEGA LEAO");
  });
});
