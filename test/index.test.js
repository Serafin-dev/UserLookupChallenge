const request = require("supertest");
const app = require("../src/index");
const users = require("../users.json");

describe("/users", function () {
  it("/users endpoint should be declared", async () => {
    const response = await request(app).get("/users");
    expect(response.status).not.toEqual(404);
  });

  it("should return 400 status when 'id' is not specified", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toEqual(400);
  });

  it("should return a json type", async () => {
    const response = await request(app).get("/users");
    expect(JSON.stringify(response.header)).toContain("application/json");
  });

  it("when send /users?id=1 should get user 1 ", async () => {
    const response = await request(app).get("/users?id=1");
    let user = response.body;

    if (Array.isArray(response.body)) {
      expect(response.body.length).toEqual(1);
      user = response.body.shift();
    }

    expect(JSON.stringify(user)).toEqual(JSON.stringify(users[0]));
  });

  it("should return 400 status when 'id' is not a valid integer", async () => {
    const response = await request(app).get("/users?id=invalid");
    expect(response.status).toEqual(400);
  });

  it("should return 404 status for an id out of range", async () => {
    const response = await request(app).get("/users?id=1000");
    expect(response.status).toEqual(404);
  });

  it("when send /users?id=2 should get user 2 ", async () => {
    const response = await request(app).get("/users?id=2");
    let user = response.body;

    if (Array.isArray(response.body)) {
      expect(response.body.length).toEqual(1);
      user = response.body.shift();
    }
    expect(JSON.stringify(user)).toEqual(JSON.stringify(users[1]));
  });
});
