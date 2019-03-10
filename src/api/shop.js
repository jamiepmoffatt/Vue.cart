/**
 * Mocking client-server processing
 */
const _products = [
    {"id": 1, "title": "Product One", "description": "This is Product One, it is a fantastic product that does everything.", "price": 1.01, "inventory": 2},
    {"id": 2, "title": "Product Two", "description": "Product Two, does exaclty what it says on the tin!", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Product Two XL", "description": "Everything Product Two does, just more of it!", "price": 19.99, "inventory": 18},
    {"id": 4, "title": "Product Four", "description": "You need something to do something, Product Four has you covered.", "price": 25.50, "inventory": 99},
    {"id": 5, "title": "Product Five", "description": "Product Five replaced Product Three, it's just better", "price": 5.99, "inventory": 6},
    {"id": 6, "title": "Product Six", "description": "The sixth product in this series. This one does a lot more which is why it has a longer description. WHen you buy it you will see it does wonders in what it does.", "price": 84.99, "inventory": 25},
    {"id": 7, "title": "Product Seven", "description": "Simply the best", "price": 200.00, "inventory": 1},
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // Simulate
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
  }