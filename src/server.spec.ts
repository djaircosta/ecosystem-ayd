import sayHelloWorld from "@/server";
describe("First test of my life", () => {
    test("should call sayHelloWorld and return a message", () => {
        const message = sayHelloWorld ("Hello World!");
        expect(message).toBe("Hello World!");
})


})