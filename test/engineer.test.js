const Engineer = require("../team/engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser"; 
    const e = new Engineer("Foo", 1, "test@testmail.com", testValue);
    expect(e.github).toBe(testValue); 
});
//Test getRole Function 
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer"; 
    const e = new Engineer("Foo", 1, "test@testmail.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});
//Test getGithub function
test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@testmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});