export const BASE_URL = 'https://elanco.aldeaestudio.com/api/';

export const sendAndLoad = async (formData) => await (await fetch(BASE_URL, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
    },
    body: formData
})).json()
