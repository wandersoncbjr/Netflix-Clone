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
                titles: 'origanais do netflix',
                items: await basicoFech(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_CHAVE}`)
            },
            
            {
                slug: "trending",
                titles: "recomendados para você",
                items: await basicoFech(`/trending/all/week?language=pt-BR&api_key=${API_CHAVE}`)
            },
            {
                slug: "toprated",
                titles: "em alta",
                items: await basicoFech(`/movie/top_rated?language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "action",
                titles: "ação",
                items: await basicoFech(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "comedy",
                titles: "comédia",
                items: await basicoFech(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "horror",
                titles: "terror",
                items: await basicoFech(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_CHAVE}`)
            },

            {
                slug: "romance",
                titles: "Romance",
                items: await basicoFech(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_CHAVE}`)
            },
            {
                slug: "documentary",
                titles: "documentários",
                items: await basicoFech(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_CHAVE}`)
            }



        ];
    }
}