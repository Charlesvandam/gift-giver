
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
}


export const giftsService = new GiftsService()