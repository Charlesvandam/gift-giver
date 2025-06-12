export class Gift{
    constructor(data){
        this.tag = data.tag ?? 'You\'re homie don\'t put no description, bro!' 
        this.Url = data.url ?? 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHEzZWk2bDUxbW9lM2g1bGt6NW1zcnR1bXp6emswbjZ1MXFmbHp1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BXa2alBjrCXC/giphy.gif'
        this.opened = data.opened
        this.id = data.id;

    }

    
    get giftHTMLTemplate() {
        return `
            <div class="col-6 col-md-3">
                <div class="row card-bg">
                    <img class="img-fluid w-100" src="${this.Url}" alt="${this.tag}" onclick="app.giftsController.changeBoolean('${this.id}')">
                    <div class="text-center p-2 my-2">${this.tag}</div>
                </div>
            </div>
        `
    }
}