export function TaxExemption(
  aposentada: boolean,
  portadoraDeDoenca: boolean,
  totalDeRendimentos: number
): string {


  if (aposentada || portadoraDeDoenca || totalDeRendimentos <= 36000) {
    return "ISENTA";
  }else {
    return "PEGA LEAO";
  }

  
} 
