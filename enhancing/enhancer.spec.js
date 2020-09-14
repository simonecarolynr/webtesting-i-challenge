const enhancer = require('./enhancer.js');
// test away!

describe("Enhancer tests", () => {
    it("Enhancement increases by one if item enhancement is less than 20", () => {
        const item = {
            name: "test1",
            enhancement: 16,
            durability: 10
        }
        enhancer.success(item)
         expect(item.enhancement).toBe(17)
    })

    it("Durability decreases by 5 when enhacement is less than 15", () => {
        const item = {
            name: "test2",
            enhancement: 14,
            durability: 12
        }
        enhancer.fail(item)
         expect(item.durability).toBe(7)
    })

    it("Durability decreases by 10 if enhancement is greater than or equal to 15", () => {
        const item = {
            name: "test3",
            enhancement: 16,
            durability: 10
        }
        enhancer.fail(item)
         expect(item.durability).toBe(0)
    })

    it("Enhancement decreases by 1 if enhancement is greater than 16", () => {
        const item = {
            name: "test4",
            enhancement: 5,
            durability: 8
        }
        enhancer.fail(item)
         expect(item.enhancement).toBe(5)
    })

    it("Durability goes back to 100 when item is repaired", () => {
        const item = {
            name: "test5",
            enhancement: 9,
            durability: 85
        }
        enhancer.repair(item)
         expect(item.durability).toBe(100)
    })
})