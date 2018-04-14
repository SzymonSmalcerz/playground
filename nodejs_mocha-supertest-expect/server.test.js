const request = require("supertest"),
      expect  = require("expect");

const {app} = require("./server");

describe("basic tests for express", () => {

  describe("test for 404 bad gateway", () => {


    it("should print bad gateway (1)", (done) => {
      request(app).get("/dzibrisz")
                  .expect(404)
                  .expect((res) => {
                    expect(res.text).toBe("bad gateway")
                  })
                  .end(done)
    })

    it("should print bad gateway (2)", (done) => {
      request(app).get("/asdsadd/sda/123/dsa")
                  .expect(404)
                  .expect((res) => {
                    expect(res.text).toBe("bad gateway")
                  })
                  .end(done)
    })

    it("should print bad gateway (3)", (done) => {
      request(app).get("/getExemplaryUserr")
                  .expect(404)
                  .expect((res) => {
                    expect(res.text).toBe("bad gateway")
                  })
                  .end(done)
    })


  })

  describe("test for actual route", () => {

    it("should fetch user data", (done) => {
      request(app).get("/getExemplaryUser")
                  .expect((res) => {
                    expect(res.body).toEqual({
                      name : "Szymon",
                      surname : "Smalcerz",
                      age : 22
                    })
                  })
                  .expect(200)
                  .end(done)
    })

  })

})
