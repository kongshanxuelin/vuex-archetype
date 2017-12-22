const _LISTS = [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]

export default {
    list(cb) {
        setTimeout(() => cb(_LISTS), 100)
    },
    addOne(obj, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}