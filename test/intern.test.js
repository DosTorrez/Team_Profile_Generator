const Intern = require("../team/intern");
test("Can set school via constructor", () => {
    const testValue = "DU";
    const e = new Intern("Foo", 1, "test@testmail.com", testValue);
    expect(e.school).toBe(testValue);
});
//Test getRole 
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@testmail.com", "CSU");
    expect(e.getRole()).toBe(testValue);
});
// Test getSchool
test("Can get school via getSchool()", () => {
    const testValue = "DU";
    const e = new Intern("Foo", 1, "test@testmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});