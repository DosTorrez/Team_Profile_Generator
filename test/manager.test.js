const Manager = require("../team/manager");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const  e = new Manager("Foo", 1, "test@testmail.com", testValue);
    expect(e.officeNumber).toBe(testValue); 
});
//getRole function 
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@testmail.com", 100);
    expect(e.getRole()).toBe(testValue);
});
// getOffice function 
test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@testmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});