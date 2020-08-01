import config from '../config';

const URLvideos = `${config.URL}/videos`;

function createNewVideo(videoObject) {
  return fetch(`${URLvideos}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  createNewVideo,
};
