import 'server-only'

const API_URL = 'https://api.tfl.gov.uk/Line/Mode/Tube/Status';

export async function fetchAPI() {
    const data = await fetch(`${API_URL}?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await data.json();
}
