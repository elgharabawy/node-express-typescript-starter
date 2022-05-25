import request from "supertest";

import app, { server } from "../src/index";

describe("Get Endpoints", () => {
  it("Should return 200 0r 400 for not found", async () => {
    const res = await request(app).get("/cms-content-item/test");

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toContain("test");
  });
});

afterAll(() => {
  server.close();
});
