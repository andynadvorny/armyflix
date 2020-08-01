const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://armyflix.herokuapp.com';

export default { URL };
