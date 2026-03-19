class Product {
    name;
    price;
    PID;
    inCart = false;
    isOrdered = false;
    constructor(name, price, PID) {
        this.name = name;
        this.price = price;
        this.PID = PID;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `${this.name} is ordered in ${this.price}`;
        }
        else {
            return `no product ordred`;
        }
    }
}
var product = new Product("tv", 23000, 123);
product.addToCart();
console.log(product.buyProduct());
export {};
//# sourceMappingURL=product.js.map