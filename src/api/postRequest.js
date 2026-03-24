import { RequestData } from "./requester";

const configInterface = {
    method: 'POST',
    url: '',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: {}
}

export const JoinWaitlist = async (title, userEmail, firstName, lastName, phone, riderType) => {
    configInterface.url = process.env.VITE_API_URL + `/api/waitlist/join`
    configInterface.data = {
        title: title,
        userEmail: userEmail,
        name: firstName + lastName,
        contactNumber: phone,
        riderType: riderType
    }
    let res = await RequestData(configInterface);
    return res;
}