// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Cars", () => {
    console.log('hello!');
    describe("GET /cars", () => {
        it("should get all cars", (done) => {
            chai.request(server.app)
                .get('/cars')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});