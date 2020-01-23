import React from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function BtnDeleteDoc(props) {
  const { collection, id } = props;
  const dispatch = useDispatch();

  async function handleDelete() {
    try {
      await Axios.delete(`${backendUrl}/${collection}/${id}`);
      (async () => {
        let res = await Axios.get(`${backendUrl}/portfolio`);
        dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data })
      })();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button data-testid="BtnDeleteDoc" className="BtnDeleteDoc" type="submit" onClick={handleDelete}>Delete</button>
  )
}

export default BtnDeleteDoc;