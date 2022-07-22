
export const extraerDatos = async(img) => {
    const resp = await fetch(`https://pixabay.com/api/?key=27793799-e8f8dd15d3eb55a8fb39f6c98&q=${img}&per_page=20`);
    const datos = await resp.json();
    const {hits} = datos;


    const estructura = hits.map((imagen) => {
        return {
            id: imagen.id,
            likes: imagen.likes,
            largeImageURL: imagen.largeImageURL,
            views: imagen.views,
        }
    });

    
    return estructura;

}