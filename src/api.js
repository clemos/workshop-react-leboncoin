
const APIKEY = '7c7c5f67';

export const rechercher = terme =>
  fetch( `https://www.omdbapi.com/?t=${encodeURI(terme)}&apikey=${APIKEY}` )
    .then( res => res.json() )