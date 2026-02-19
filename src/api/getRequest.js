import { RequestData } from "./requester";

const configInterface = {
    method: 'GET',
    url: "",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export const GetLandingEvents = () => {
    configInterface.url = import.meta.env.VITE_API_URL + '/api/landing/landingEvents';

    let res = RequestData(configInterface);
    return res;
}