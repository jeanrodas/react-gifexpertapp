

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=SzmUWi9qUzc4LjqNo6x9U86yk2PP0NkC`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return  {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });



  return gifs;

}