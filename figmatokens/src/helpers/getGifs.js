export const getGifs = async(category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?apikey=kk9hV90wAO3tLOqByNLue1Rp51VuLSVO&q=${category}&limit=5`
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
  }