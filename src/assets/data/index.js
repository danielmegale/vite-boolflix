const endpoint = 'https://api.themoviedb.org/3/search';
const apiKey = '3227a3b21c173acaf58773dc742e1cf6';

export const movieEndpoint  = endpoint + '/movie?api_key=' + apiKey;
export const tvEndpoint  = `${endpoint}/tv?api_key=${apiKey}`;