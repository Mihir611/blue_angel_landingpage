import { RequestData } from "./requester";

const configInterface = {
    method: 'GET',
    url: "",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const GetLandingEvents = async () => {
    configInterface.url = import.meta.env.VITE_API_URL + 'api/landing/landingEvents';

    let res = await RequestData(configInterface);
    return res;
}

export const GetCommunities = async (params = {}) => {
    const query = new URLSearchParams(params).toString()
    configInterface.url = import.meta.env.VITE_API_URL
        + 'api/communities/landing/featuredCommunities'
        + (query ? `?${query}` : '')

    let res = await RequestData(configInterface);
    return res;
}