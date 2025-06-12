
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "../utils/Axios.js"

class GiftsService{
    async getGifts(){
        const response = await api.get('api/gifts')
        console.log('Got Gifts!', response.data);
        
        const gifts = response.data.map(pojo => new Gift(pojo))
        AppState.gifts = gifts
    }

    async changeBoolean(giftId) {
        let ourGift = AppState.gifts.find((gift) => giftId == gift.id);
        console.log('📡📡📡📡📡 found Gift', ourGift);
        if (ourGift.opened === true) {
            return;
        }
        if (ourGift.opened === false) {
            ourGift.opened = true;
            const res = await api.put(`api/gifts/${giftId}`, ourGift);
            console.log('🐕‍🦺🎁📡PUT putted', res.data);
            AppState.openedGift = ourGift;
        }
        
    }
}


export const giftsService = new GiftsService()