export class Gift{
    constructor(data){
        this.tag = data.tag
        this.Url = data.url
        this.opened = data.opened

    }

    
    get giftHTMLTemplate() {
        return `
            <div class="col-6 col-md-3">
                <div class="row card-bg">
                    <img class="img-fluid w-100" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczRiaHAzMzJ4enhvbThoOXFkem9nYjFpajZ4NDF4ZWttdzB2dG84aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DFexVkRG7gX9oCy68r/giphy.gif" alt="cat party dude">
                    <div class="text-center p-2 my-2">This GIft is my pride</div>
                </div>
            </div>
        `
    }
}