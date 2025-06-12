import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
    constructor() {
        console.log("this controller is ready");
        AppState.on("identity", this.getgifts);
        AppState.on('gifts', this.drawGifts)
        
    }

    async getgifts() {
    try {
        await giftsService.getGifts();
    } catch (error) {
        Pop.error(error, "you done fudged up", "could not get gifts");
        console.error("getgifts failed", error);
        }
    }

    async drawGifts() {
        const gifts = AppState.gifts;
        let giftsContent = '';
        gifts.forEach((gift) => giftsContent += gift.giftHTMLTemplate);
        const giftElm = document.getElementById('gifts-section');
        giftElm.innerHTML = giftsContent;
    }

    changeBoolean(giftId) {
        giftsService.changeBoolean(giftId);
    }
}
