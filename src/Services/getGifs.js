const apiKey = 'ukzi7JHMHcx7AAjHJffLmBkQN5amm1M7&q'



export default function getGifs({keywords = 'morty'} = {}) {
    const ApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keywords}&limit=25&offset=0&rating=g&lang=en`
    return fetch(ApiUrl)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if (Array.isArray(data)){
                const gifs = data.map(image => {
                    const {images ,title, id} = image
                    const {url} = images.downsized_medium
                    return { title, id, url}
                })
                return gifs;
            }
    })
}

