const PRODUCTS = [
    {
        id: 100,
        name: 'Latte',
        price: '$5.99',
        image: require('../assets/images/latte.jpeg'),
        description: 'Latte is a beverage that contains milk, cream, and coffee.'
    },
    {
        id: 101,
        name: 'Coffee',
        price: '$4.99',
        image: require('../assets/images/coffee.jpeg'),
        description: 'Coffee is a beverage that contains milk, cream, and coffee.'
    }
];

export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
