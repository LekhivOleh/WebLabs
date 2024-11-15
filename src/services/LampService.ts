import $api from "../http/api";
import { AxiosResponse } from "axios";
import { Lamp } from "../assets/utils/Lamp";
import { SearchOptions } from "../assets/utils/SearchOptions";
import { LampDto } from "../assets/utils/LampDto";

export default class LampService {
    static async getLamps(searchOptions: SearchOptions | null): Promise<AxiosResponse<Lamp[]>> {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        let data = await $api.get('/Lamp/Get', {
            params: searchOptions
        });
        return data;
    }

    static async createLamp(lamp: LampDto): Promise<AxiosResponse<Lamp>> {
        return $api.post('/Lamp/Add', lamp);
    }

    static async updateLamp(lamp_id: string, lamp: LampDto): Promise<AxiosResponse<void>> {
        return $api.put(`/Lamp/Update/${lamp_id}`, lamp);
    }

    static async deleteLamp(lamp_id: string): Promise<AxiosResponse<void>> {
        return $api.delete(`/Lamp/Delete/${lamp_id}`);
    }

    static async getLampById(lamp_id: string): Promise<AxiosResponse<LampDto>> {
        return $api.get<LampDto>(`/Lamp/GetById/${lamp_id}`);
    }
}