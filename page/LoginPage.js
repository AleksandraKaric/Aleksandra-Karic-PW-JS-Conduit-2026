class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('[placeholder="Email"]');
    this.passwordInput = page.locator('[placeholder="Password"]');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.locator('.error-messages');
  }

  async login(user) {
    await this.page.goto("/login")
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.signInButton.click();
  }
  
}
export { LoginPage };
