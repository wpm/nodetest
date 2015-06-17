# Node.js Unit Testing Examples

This module contains examples of the following [Node.js](https://nodejs.org) unit testing techniques.

* Generating code coverage reports
* Mocking objects with spies
* Testing asynchronous promises

This module applies behavior-driven development (BDD) testing to Javascript code that does not run in a browser.

The code to be tested consists of two functions: `add`, which adds two values, and `asyncAdd`, which adds two values 
and returns the result inside a [promise](https://github.com/petkaantonov/bluebird) object

Run the tests on these functions with

    npm test

The `scripts` section of `package.json` uses the [istanbul](https://gotwarlost.github.io/istanbul) code coverage tool
to launch the [jasmine-node](https://github.com/mhevery/jasmine-node) test runner on the script in the `test` directory.
This will run the unit tests and generate a code coverage report in the `coverage` directory.

First the unit tests in this module simply test the `add` function using expect-style assertions.

Next, they use the spy facility in Jasmine to create a mock of the `add` function which intercepts and keeps track of
the calls to this function.

Finally, they call the `asyncAdd` function and verify its resolved value using the `eventually` idiom provided by the
[chai-as-promised](https://github.com/domenic/chai-as-promised/) package.
