import Item from '../item.js';

describe('Testes dos itens', () => {
  it('Deve ter 3 campos nome, valor, quantidade', () => {
    const item = new Item('Beterraba', 2.5, 20);

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(20);
  });

  it('Deve ter o price calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 1.2, 50);

    expect(item.pegaValorTotalItem()).toBe(60);
  });
});
