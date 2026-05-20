class SettingsPage{
    constructor(page){
        this.page = page;
        this.logoutButton = page.locator('[class="btn btn-outline-danger"]', {hasText: 'Or click here to logout. '});
       
    }

    async logout(){
        await this.logoutButton.click()
    }
}

export{SettingsPage}