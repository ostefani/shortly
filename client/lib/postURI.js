const { API } = process.env;
console.log('API: ', API);

export default params => {
    const URI = `${API}/api`;

    const query = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(params),
    };
    return fetch(URI, query)
        .then(response => {
            if (response.ok || response.status === 400) {
                return response.json();
            }
            throw Error('We run into problem, try again later');
        })
        .catch(error => error);
};
