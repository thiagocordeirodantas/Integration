import Carrinho from '../carrinho.js';
import Item from '../item';

describe('Testes do carrinho', () => {
  it('Deve inicilizar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });
  it('Deve ter itens', () => {
    const item = new Item('Uva', 2, 1);
    const item2 = new Item('Banana', 3, 2);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });
    it('Deve ter a propridade "total" na inicializacao', () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total');
    })
});

