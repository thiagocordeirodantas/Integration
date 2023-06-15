import { somaHorasExtras, calculaDescontos } from "../index.js"

test('Deve retornar a soma das horas extras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  expect(retornado).toBe(esperado);
});

test('deve retorna o desconto no salario', () => {
    const esperado = 2000;
    const retornado =calculaDescontos(2500,500);

    expect(retornado).toBe(esperado);
})