"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Calculator", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
    });
    it("Add 2 numbers", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("13");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(5000);
    });
});
