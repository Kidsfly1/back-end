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
          username: "Family",
          password: "asdf"
        })
        .then(response => {
          expect(response.status).toBe(201);
        });
    });

    it("should return a username and id of role agent", () => {
      return request(server)
        .post("/api/user/register")
        .send({
          username: "Agent",
          password: "asdfasdf",
          role_id: 2
        })
        .then(response => {
          expect(response.body.id);
          expect(response.body.username);
        });
    });

    it("should create a admin user", () => {
      return request(server)
        .post("/api/user/register")
        .send({
          username: "Admin",
          password: "asdfczv",
          role_id: 3
        })
        .then(response => {
          expect(response.body.message).toBe("Account created succesfully!");
        });
    });
  });

  describe("api/user/login", () => {
    it("should return status 200", () => {
      return request(server)
        .post("/api/user/register")
        .send({
          username: "Admin2",
          password: "asdfczv",
          role_id: 3
        })
        .then(response => {
          return request(server)
            .post("/api/user/login")
            .send({
              username: "Admin2",
              password: "asdfczv"
            })
            .then(response => {
              expect(response.body.user.role).toBe("admin");
            });
        });
    });

    it("should return a token", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "Admin2", password: "asdfczv" })
        .then(response => {
          expect(response.body.token);
        });
    });
  });

  describe("api/user/agents", () => {
    it("should return agents", () => {
      return request(server)
        .get("/api/user/agents")
        .then(response => {
          console.log(response.body);
          expect(response.body);
        });
    });
  });
});
