import config from '../config';

const URLcategories = `${config.URL}/categories`;

function getAll() {
  return fetch(`${URLcategories}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URLcategories}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

function createNewCategory(categoryObject) {
  return fetch(`${URLcategories}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  })
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  getAll,
  getAllWithVideos,
  createNewCategory,
};
