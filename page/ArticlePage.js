class ArticlePage {

    constructor(page){
        this.page = page;
        this.editArticleButton = page.getByRole('a', {hatText:' Edit Article '})
        this.deleteArticleButton = page.getByRole('buttton', {hasText:' Delete Article '})
        
    }

async deleteArticle() {
        await this.deleteArticleButton.click();
}

}

export {ArticlePage}