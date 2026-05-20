import { test, expect } from "@playwright/test";
import { users } from "../../test_data/users";

test.describe("API - article management", () => {

  test("API - article CRUD", async ({ page, request }) => {
    const userCredentials = {
      user: {
        email: users.validUser.email,
        password: users.validUser.password,
      },
    };

    const article = {
      article: {
        title: "Pančevo",
        description: "pančevo",
        body: "Pančevo",
        tagList: ["PA"],
      },
    };

    const loginResponse = await page.request.post(
      "https://conduit-api.bondaracademy.com/api/users/login",
      { data: userCredentials },
    );

    const loginBody = await loginResponse.json();
    console.log(loginBody);
    const token = loginBody.user.token;
    console.log(token);

    const createdArticle = await page.request.post(
      "https://conduit-api.bondaracademy.com/api/articles/",
      {
        headers: { Authorization: "Token " + token },
        data: article,
      },
    );
    expect(createdArticle.status()).toBe(201);
    const createdArticleBody = await createdArticle.json();
    console.log(createdArticleBody);
    const slug = createdArticleBody.article.slug;
    console.log(slug);

    const getCreatedArticle = await page.request.get(
      `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
      { headers: { Authorization: "Token " + token } },
    );

    expect(getCreatedArticle.status()).toBe(200);

    const editArticle = {
      article: {
        title: "Pančevo1",
        description: "pančevo2",
        body: "Pančevo3",
        tagList: ["PA4"],
      },
    };

    const updateArticle = await page.request.put(
      `https://conduit-api.bondaracademy.com/api/articles/${slug}`,
      {
        headers: { Authorization: "Token " + token },
        data: editArticle,
      },
    );
    expect(updateArticle.status()).toBe(200);
    const updateArticleBody = await updateArticle.json();
    console.log(updateArticleBody);
    const newSlug = updateArticleBody.article.slug;
    console.log(newSlug);

    const deleteArticle = await page.request.delete(
      `https://conduit-api.bondaracademy.com/api/articles/${newSlug}`,
      {
        headers: { Authorization: "Token " + token },
      },
    );

    expect(deleteArticle.status()).toBe(204);

    const getDeletedArticle = await page.request.get(
      `https://conduit-api.bondaracademy.com/api/articles/${newSlug}`,
      {
        headers: { Authorization: "Token " + token },
      },
    );
    console.log(getDeletedArticle.status());
    expect(getDeletedArticle.status()).toBe(404);

    const getListArticles = await page.request.get(
      "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0",
      {
        headers: { Authorization: "Token " + token },
      },
    );
    const jsonListArticles = await getListArticles.json();
    console.log(jsonListArticles);
    expect(jsonListArticles.articles[0].title).not.toBe("Pančevo1");
  });
});
