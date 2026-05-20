import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../../page/RegisterPage";
import { HomePage } from "../../../page/HomePage";
import { SettingsPage } from "../../../page/SettingsPage";
import { createRandomUser } from "../../../support/helpers";
import { navigate } from "../../../support/helpers";

test.describe("User registration", () => {
  let registerPage;
  let homePage;
  let settingsPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    homePage = new HomePage(page);
    settingsPage = new SettingsPage(page);
  });

  test("user can register", async ({ page }) => {
    const user = createRandomUser();
    await registerPage.register(user);
    await expect(homePage.navHome).toBeVisible();
  });

  test("user cannot register with existing email", async ({ page }) => {
    const user1 = createRandomUser();
    await registerPage.register(user1);

    await expect(homePage.navHome).toBeVisible();
    await navigate(page, " Settings ");
    await settingsPage.logout();
    await page.goto("/register");

    const user2 = createRandomUser();
    user2.email = user1.email;
    await registerPage.register(user2);

    await expect(registerPage.emailTakenErrorMessage).toBeVisible();
  });
});
