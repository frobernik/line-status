const API_URL = 'https://api.tfl.gov.uk/Line/Mode/Tube/Status';

export async function fetchAPI() {
    const data = await fetch(API_URL, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await data.json();
}
