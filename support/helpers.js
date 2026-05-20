

export async function clickButton(page, text) {
  const button = page.getByRole("button", { name: text });
  await button.click();
}

export async function navigate(page, text){
  const link = page.locator('[class="nav-link"]', {hasText: text});
  await link.click();
}

export function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function createRandomUser() {
  return {
    username: randomString(8),
    email: `${randomString(8)}@mail.xyz`,
    password: `${randomString(6)}A1`
  };
}

export function createRandomArticle() {
  return {
      title: randomString(10),
      description: randomString(15),
      body: randomString(30),
      tagList: randomString(5),
  };
}




