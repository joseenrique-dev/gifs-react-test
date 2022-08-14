export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=QWggCM1TOk6DJiwY3SNgZt4ToU2kpe1j&limit=10`;   
    const response = await fetch(url);
    const { data } = await response.json();
    // console.log([data, category]);
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}