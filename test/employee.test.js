const employee = require("../team/employee");
const Employee = require("../team/employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("Can set name via constructor arguments", () => {
        const name = "Frank";
        const e = new Employee(name);
        expect(e.id).toBe(testValue);
    });
    it("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", 1, testValue);
        expect(e.id).toBe(testValue);
    });
    it("Can set email via constructor argument", () => {
        const testValue = "test@testmail.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });
    //Name
    describe("getName", () => {
         it("Can get name via getName()", () => {
            const testValue = "Lily"; 
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
         });
    });
    //ID
    describe("getId", () =>{
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    //Email
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@testmail.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    //Role 
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee"; 
            const e = new Employee("Lily", 1, "test@testmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});