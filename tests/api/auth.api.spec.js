import { test, expect } from "@playwright/test";
import { createRandomUser } from "../../support/helpers";

test.describe("API - User registration", () => {
  test("API - user can succeefully register", async ({ page }) => {
    const user = createRandomUser();
    const userCredentials = {
      user: {
        email: user.email,
        password: user.password,
        username: user.username,
      },
    };

    const registerResponse = await page.request.post(
      "https://conduit-api.bondaracademy.com/api/users",
      { data: userCredentials },
    );
    expect(registerResponse.status()).toBe(201);
  });

  test("API - cannot create a user with same username", async ({ page }) => {
    const user = createRandomUser();
    const userCredentials = {
      user: {
        email: user.email,
        password: user.password,
        username: user.username,
      },
    };

    const registerResponse = await page.request.post(
      "https://conduit-api.bondaracademy.com/api/users",
      { data: userCredentials },
    );
    expect(registerResponse.status()).toBe(201);

    const registerBody = await registerResponse.json();
    console.log(registerBody);

    const username = registerBody.user.username;
    console.log("Username is " + username);
    const token = registerBody.user.token;
    console.log("Token is " + token);

    const newUser = createRandomUser();
    const newUserCredentials = {
      user: {
        email: newUser.email,
        password: newUser.password,
        username: user.username,
      },
    };

    const addNewUser = await page.request.post(
      `https://conduit-api.bondaracademy.com/api/users`,
      { data: newUserCredentials },
    );
    expect(addNewUser.status()).toBe(422);
  });
});
