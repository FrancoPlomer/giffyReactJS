
import React, {useState,useEffect} from 'react';
import './App.css';
const ApiURL = 'https://api.giphy.com/v1/gifs/search?api_key=ukzi7JHMHcx7AAjHJffLmBkQN5amm1M7&q=panda&limit=25&offset=0&rating=g&lang=en';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () 
  {
    fetch(ApiURL)
        .then(res => res.json())
        .then(response =>   
          {
            const {data} = response
            const gifs = data.map(image => image.images.downsized_medium.url)
            setGifs(gifs)
          })
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
