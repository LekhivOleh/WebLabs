import {AxiosResponse} from "axios";
import $api from "../http/api";
import {CartDTO} from "../assets/utils/CartDto";

export default class CartService {
    static async getCarts(): Promise<AxiosResponse<CartDTO[]>> {
        return $api.get('/Cart/Get');
    }

    static async createCart(cart: CartDTO): Promise<AxiosResponse<void>> {
        return $api.post<void>('/Cart/Add', cart);
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
}