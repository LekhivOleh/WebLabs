import {AxiosResponse} from "axios";
import $api from "../http/api";
import {CartDTO} from "../assets/utils/CartDto";

export default class CartService {
    static async getCarts(userId: string): Promise<AxiosResponse<CartDTO[]>> {
        return $api.get('/Cart/Get', {
            params: { userId }
        });
    }

    static async createCart(cart: CartDTO) {
        return $api.post('/Cart/Add', cart, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    }


    static async updateCart(cart_id: string, cart: CartDTO): Promise<AxiosResponse<CartDTO>> {
        return $api.put<CartDTO>(`/Cart/Update/${cart_id}`, cart);
    }

    static async deleteCart(cart_id: string | undefined): Promise<AxiosResponse<CartDTO>> {
        return $api.delete<CartDTO>(`/Cart/Delete/${cart_id}`);
    }

    static async getCartById(cart_id: string): Promise<AxiosResponse<{ data: CartDTO }>> {
        return $api.get<{ data: CartDTO }>(`/Cart/GetById/${cart_id}`);
    }

    static async deleteAllCarts(user_id: string){
        const response = await this.getCarts(user_id);
        const cartIds = response.data.map(cart => cart.id);
        await Promise.all(cartIds.map(id => this.deleteCart(id)));
    }
}