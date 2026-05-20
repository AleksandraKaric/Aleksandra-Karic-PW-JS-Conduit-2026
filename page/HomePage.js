class HomePage {
constructor(page) {
    this.page = page;

    this.navHome = page.locator('[class="nav-link active"]').getByText(" Home ")
    this.navNewArticle = page.locator('[class="nav-link"]').getByText(" New Article ")
    this.navSettings = page.locator('[class="nav-link"]').getByText(" Settings ")
  }
}

export { HomePage };