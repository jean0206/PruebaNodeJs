const request = require("supertest");
const { response } = require("../src/app");
const app = require("../src/app");
const assert = require("assert");

/**
 * Testing upload data
 */
it("respond with json", (done) => {
  request(app).get("/data").expect(200, done);
});

describe("/GET data/filter/:priceMin/:priceMax/:rooms", () => {
  it("responde wit 401 when the priceMin is greather than the priceMax", (done) => {
    request(app)
      .get("/data/filter/20/10/3")
      .expect(401)
      .then((response) => {
        assert(
          response.error,
          "The minimum price must not be higher than the maximum price"
        );
        done();
      });
  });
});

describe("/GET data/filter/:priceMin/:priceMax/:rooms", () => {
  it("responde with 202 whent the search is right", (done) => {
    request(app)
      .get("/data/filter/700/900/3")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /report/:latitude/:length/:fileType", () => {
  it("responde with 200 and a csvFile", (done) => {
    request(app)
      .get("/data/report/40.365843/-3.5884521/csv")
      .expect("Content-Type", /csv/)
      .expect(200, done);
  });
});

describe("GET /report/:latitude/:length/:fileType", () => {
  it("responde with 200 and a csvFile", (done) => {
    request(app)
      .get("/data/report/40.365843/-3.5884521/pdf")
      .expect("Content-Type", /pdf/)
      .expect(200, done);
  });
});
