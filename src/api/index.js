const URL = 'https://api.unsplash.com/search/photos/?per_page=50&query=cat&client_id=13971cbe530ee5c2e8f2dc29e0932314bbe217641f45f8ce63531bfa8411de37';

export default () => {
    return fetch(URL)
    .then(response => Promise.all([response, response.json()]));
}