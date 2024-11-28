import $api from "../http/api";
import { AxiosResponse} from "axios";
import {User, UserLoginDto, UserRegisterDto} from "../assets/utils/User";

export default class AuthService {
    static async Register(user: UserRegisterDto): Promise<AxiosResponse<void>> {
        return $api.post('/User/Register', user);
    }

    static async Login(user: UserLoginDto): Promise<AxiosResponse<string>> {
        return $api.post('/User/Login', user);
    }

    static async CheckUser(token: string): Promise<AxiosResponse<boolean>> {
        return $api.post('/User/CheckUser', token);
    }

    static async GetUserByUsername(username: string) {
        return $api.get(`/User/GetUserByUsername`, { params: { username } });
    }
}
