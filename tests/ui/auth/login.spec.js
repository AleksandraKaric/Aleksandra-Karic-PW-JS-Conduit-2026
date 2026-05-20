import { test, expect } from "@playwright/test";
import { users } from "../../../test_data/users";
import { LoginPage } from "../../../page/LoginPage";
import { HomePage } from "../../../page/HomePage";
import { navigate } from "../../../support/helpers";
import { SettingsPage } from "../../../page/SettingsPage";

test.describe("User login", async () => {
  let loginPage;
  let homePage;
  let settingsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    settingsPage = new SettingsPage(page);
  });

  test("user can login", async ({ page }) => {
    await loginPage.login(users.validUser);
    await expect(homePage.navHome).toBeVisible();
    await navigate(page, ' Settings ');
    await expect(page).toHaveURL('/settings')
    await settingsPage.logout();

  });

  test("user cannot login with invalid password", async ({ page }) => {
    await loginPage.login(users.invalidPasswordUser);
    await expect(loginPage.errorMessage).toHaveText(
      "email or password is invalid",
    );
    await expect(loginPage.errorMessage).toHaveCSS("color", "rgb(184, 92, 92)");
  });
});
