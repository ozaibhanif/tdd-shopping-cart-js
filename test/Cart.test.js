let { Cart, addItemInCart, totalPrice, quantityUpdate, emptyCart, removeItem } = require('./src/Cart');
const { addSaleItem, emptysaleList } = require('./src/Item');

//1.Given that I visit the site, when I begin shopping, then I expect my cart to be empty.
test('Cart should be empty', () => {
    // Arrange
    const assert = [];
    // Act
    const result = Cart();
    // Assert
    expect(result).toEqual(assert)
})