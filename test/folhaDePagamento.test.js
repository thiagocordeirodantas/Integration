import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Testes dos calculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('deve retorna o desconto no salario', () => {
    const esperado = 2000;
    const retornado = calculaDescontos(2500, 500);

    expect(retornado).toBe(esperado);
  });
});
