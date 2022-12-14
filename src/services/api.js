const API_CHAVE = "9e9024acebd138c18a3c1cc8e4e4a779";
const API_BASE = "https://api.themoviedb.org/3";


const basicoFech = async (url_padrao) => {
    const requisiao = await fetch(`${API_BASE}${url_padrao}`);
    const json = await requisiao.json();
    return json;

}

export default {
    pegandoLista: async () => {
        return [
            {
                slug: 'originais',
                titles: 'Origanais do Netflix',
                items: await basicoFech(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "trending",
                titles: "Recomendados para você",
                items: await basicoFech(`/trending/all/week?language=pt-BR&api_key=${API_CHAVE}`)
            },
            {
                slug: "toprated",
                titles: "em alta",
                items: await basicoFech(`/movie/top_rated?language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "action",
                titles: "Ação",
                items: await basicoFech(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "comedy",
                titles: "Comédia",
                items: await basicoFech(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "horror",
                titles: "Terror",
                items: await basicoFech(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "romance",
                titles: "Romance",
                items: await basicoFech(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_CHAVE}`)
            },
            {
                slug: "documentary",
                titles: "Documentários",
                items: await basicoFech(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_CHAVE}`)
            }


        ];
    },
    pegarInfoDosFilmes: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicoFech(`/movie/${movieId}?language=pt-BR&api_key=${API_CHAVE}`);
                    break;

                case 'tv':
                    info = await basicoFech(`/tv/${movieId}?language=pt-BR&api_key=${API_CHAVE}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;

    }
}