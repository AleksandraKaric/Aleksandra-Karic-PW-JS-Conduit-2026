
class EditorPage {
    constructor(page){
        this.page = page;
        this.titleInput = page.locator('[placeholder="Article Title"]');
        this.descriptionInput = page.locator('input','[class="form-group"]').nth(1);
        this.bodyInput = page.locator('textarea','[class="form-group"]').nth(0);
        this.tagsInput = page.locator('input','[class="form-group"]').nth(2)
        this.publishArticleButton = page.locator('button', {hasText: ' Publish Article '});
        this.titleErrorMessage = page.locator('.error-messages');
    }

    async createArticle(article) {
        await this.titleInput.fill(article.title);
        await this.descriptionInput.fill(article.description);
        await this.bodyInput.fill(article.body);
        await this.tagsInput.fill(article.tagList)
        await this.publishArticleButton.click()
    }

}


export {EditorPage};