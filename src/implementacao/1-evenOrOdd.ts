export function evenOrOdd(jogada1: number, jogada2: number): string {
  const soma = jogada1 + jogada2;
  if (soma % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
  