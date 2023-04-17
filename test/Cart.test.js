const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {
  // (AC 1): Given that I visit the site, when I begin shopping, then I expect my cart to be empty.

  it('should initialize as empty', () => {
    //Arrange
    const cart = new Cart();
    //Assert
    expect(cart.items).to.deep.equal([]);
    expect(cart.totalPrice).to.be.equal(0);
  });