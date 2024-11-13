


export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dy74T7Gem6Ty0A3J9L4PSp9sQiIfa9v9&q=${category}&limit=10`;
    const resp = await fetch( url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url

    }))
    return gifs;
  }
