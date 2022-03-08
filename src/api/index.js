export default async function callApi({url, method = 'get', body, headers}) {
    try {
        const response = await fetch(url, { method, body, headers });
        const result = await response.json();
        return result;
    } catch(error) {
        Promise.reject(error);
    };
};