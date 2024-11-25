export interface SearchOptions {
    search: string;
    sortManufacturer: string;
    filterPower: string;
    filterPrice: string;
    filterIsEconomical: string;
}

export const defaultSearchOptions: SearchOptions = {
    search: '',
    sortManufacturer: '',
    filterPower: '',
    filterPrice: '',
    filterIsEconomical: '',
}