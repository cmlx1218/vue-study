var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《斗罗大陆》',
                price: 88.90,
                count: 5
            }, {
                id: 2,
                name: '《倚天屠龙记》',
                price: 77.90,
                count: 2
            }, {
                id: 3,
                name: '《环球寻梦记》',
                price: 90.90,
                count: 1
            }, {
                id: 4,
                name: '《葵花宝典》',
                price: 44.90,
                count: 4
            }, {
                id: 5,
                name: '《东京爱情故事》',
                price: 99.99,
                count: 3
            }
        ]
    },
    methods: {
        add: function (index) {
            this.books[index].count++
        },
        sub: function (index) {
            this.books[index].count--
        },
        deleteItem: function (index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0
            // 1、普通for循环
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += totalPrice + this.books[i].price * this.books[i].count
            // }
            // 2、for(let i in this.books)
            // for (let i in this.books) {
            //     totalPrice += totalPrice + this.books[i].price * this.books[i].count
            // }
            // 3
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            //4

            // return this.books.reduce(function (pre, n) {
            //     return pre + n.price * n.count
            // }, 0)

            return this.books.reduce((pre, n) => pre + n.price * n.count, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }

    // 编程范式：命令式编程|声明式编程
    // 编程范式：面向对象编程(第一公民：对象)|函数式编程(第一公民：函数)
})


const nums = [22, 567, 34, 123, 112, 34, 145]
// 1、filter中回调函数必须返回一个boolean值
let newNumbers = nums.filter(function (n) {
    return n < 100
})
console.log(newNumbers)

// 2、map
let numbers = newNumbers.map(function (n) {
    return n * 2
})
console.log(numbers)

// 3、reduce：对数组中多有内容进行汇总
let result = numbers.reduce(function (preValue, n) {
    return preValue + n
}, 0)
console.log(result)


let result1 = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n * 2
}).reduce(function (preValue, n) {
    return preValue + n
}, 0)

console.log(result1)

let result2 = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)
console.log(result2)


