const request = require("supertest");

const server = require("./server");

const db = require("./data/db-config");

describe("server", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("api/user/register", () => {
    it("should return status 201", () => {
      return request(server)
        .post("/api/user/register")
        .send({
          username: "Addison",
          password: "asdf"
          // created: "apple",
          // role_id: 1
        })
        .then(response => {
          expect(response.status).toBe(201);
        });
    });
    it("should return a username and id", () => {
      return request(server)
        .post("/api/user/register")
        .send({
          username: "Greg",
          password: "asdfasdf"
        })
        .then(response => {
          expect(response.body.id);
          expect(response.body.username);
        });
    });
  });
});
