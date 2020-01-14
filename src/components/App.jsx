import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);

      setData(res.data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>All Categories</h2>
      <div>
        {
          data ?
          data.map((category, index) => {
            return (
              <div key={index}>{category.title}</div>
            )
          }) :
          <div>empty, no categories</div>
        }
      </div>
    </div>
  );
}

export default App;
