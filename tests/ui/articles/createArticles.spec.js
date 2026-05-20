import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../page/LoginPage";
import { EditorPage } from "../../../page/EditorPage";
import { ArticlePage } from "../../../page/ArticlePage";
import { users } from "../../../test_data/users";
import { HomePage } from "../../../page/HomePage";
import { createRandomArticle, navigate } from "../../../support/helpers";

test.describe("Create Articles", () => {
  let loginPage;
  let homePage;
  let editorPage;
  let articlePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    editorPage = new EditorPage(page);
    articlePage = new ArticlePage(page);

    await loginPage.login(users.validUser);
  });

  test("Create article", async ({ page }) => {
    await navigate(page, 'New Article');
    const article = createRandomArticle();
    await editorPage.createArticle(article);
    await expect(page).toHaveURL(`/article/${article.title}-50419`);
  });

  test("User cannot create article with the same title", async ({ page }) => {
    await navigate(page, 'New Article');
    const article1 = createRandomArticle();

    await editorPage.createArticle(article1);
    await navigate(page, 'New Article');
    
    const article2 = createRandomArticle();
    article2.title = article1.title;
    await editorPage.createArticle(article2);
    await expect(editorPage.titleErrorMessage).toBeVisible();
    await expect(editorPage.titleErrorMessage).toHaveText('title must be unique');

  });

});