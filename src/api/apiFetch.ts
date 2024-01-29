import { COUNTRY_API_URL } from "./url";

export async function apiFetch(countryName: string) {
    try {
        const response = await fetch(`${COUNTRY_API_URL}${countryName}`);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        const countries = data?.map((country: CountryDetailsType) => ({
            name: country?.name?.common,
            region: country?.region,
            flag: country?.flags?.svg
        }));
        return countries;
    } catch (error) {
        return [];
    };
};