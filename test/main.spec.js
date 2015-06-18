var chai = require("chai");

var main = require('../main.js');

describe("The addition function", function () {
    it("should add 2+3 to get 5", function () {
        expect(main.add(2, 3)).toEqual(5);
    });

    it("should add 10+20 to get 30", function () {
        expect(main.add(10, 20)).toEqual(30);
    });

    it("should add 'a' and 'b' to get 'ab", function () {
        expect(main.add('a', 'b')).toEqual('ab');
    });
});

describe("A mock of the addition function", function () {
    beforeEach(function () {
        spyOn(main, 'add');
        main.add(2, 5);
        main.add(10, 20);
    });

    it("should have been called with 2+5 and 10+20", function () {
        expect(main.add).toHaveBeenCalledWith(2, 5);
        expect(main.add).toHaveBeenCalledWith(10, 20);
    });

    it("should have been called twice", function () {
        expect(main.add.calls.length).toEqual(2);
    });
});

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expectPromise = chai.expect;

describe("The asynchronous addition function", function () {
    it("should add 2+3 to get 5", function () {
        expectPromise(main.asyncAdd(2, 3)).to.eventually.eq(5);
    });
});
