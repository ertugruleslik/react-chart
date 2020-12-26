const API = 'http://www.json-generator.com/api/json/get';

export const getApi = async (url, params) => {
    try {
        return await fetch(`${API}${url}?` + new URLSearchParams(params))
            .then(res => res.json());

    } catch (error) {
        throw error;
    }
}
