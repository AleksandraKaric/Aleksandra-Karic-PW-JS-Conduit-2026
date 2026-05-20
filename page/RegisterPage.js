class RegisterPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[placeholder="Username"]');
    this.emailInput = page.locator('[placeholder="Email"]');
    this.passwordInput = page.locator('[placeholder="Password"]');
    this.signUpButton = page.getByRole("button", { name: "Sign up" });
    this.usernameTakenErrorMessage = page.locator('[class="error-messages"]', {
      hasText: "username has already been taken",
    });
    this.emailTakenErrorMessage = page.locator('[class="error-messages"]', {
      hasText: "email has already been taken",
    });
  }

  async register(user) {
    await this.page.goto("/register");
    await this.usernameInput.fill(user.username);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.signUpButton.click();
  }

  async clickSignUp() {
    await this.signUpButton.click();
  }
}

export { RegisterPage };
