import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnDeleteDoc(props) {
  const { collection, id } = props;
  const dispatch = useDispatch();

  async function handleDelete() {
    try {
      await axios.delete(`${backendUrl}/${collection}/${id}`);
      (async () => {
        let res = await axios.get(`${backendUrl}/portfolio`);
        dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data })
      })();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button className="BtnDeleteDoc" type="submit" onClick={handleDelete} data-testid="BtnDeleteDoc">Delete</button>
  )
}

export default BtnDeleteDoc;