import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function DeletePrompt({ handleDelete, setDeletePromptShown }) {
  return (
    <div
      style={{
        backgroundColor: 'cyan',
        width: 300,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'centre',
        justifyContent: 'space-between',
      }}
    >
      <button style={{ backgroundColor: 'red' }} onClick={handleDelete}>
        YES, DELETE
      </button>
      <button onClick={() => setDeletePromptShown(false)}>No, my bad</button>
    </div>
  );
}

function BtnDeleteDoc(props) {
  const { collection, id, category } = props;

  const createForm = useSelector((state) => state.adminDashReducer.createForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);
  const dispatch = useDispatch();
  const [isDeletePromptShown, setDeletePromptShown] = useState(false);

  async function handleDelete() {
    setDeletePromptShown(false);

    try {
      await axios.delete(`${backendUrl}/${collection}/${id}`);
      let res = await axios.get(`${backendUrl}/${collection}`);
      dispatch({
        type: `UPDATE_${collection.toUpperCase()}_DATA`,
        [`new${_.upperFirst(collection)}Data`]: res.data,
      });
      if (category) {
        dispatch({ type: `FILTER_PORTFOLIO_DATA_${category.toUpperCase()}` });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {isDeletePromptShown ? (
        <DeletePrompt handleDelete={handleDelete} setDeletePromptShown={setDeletePromptShown} />
      ) : (
        <button
          className="BtnDeleteDoc btn"
          type="submit"
          onClick={() => setDeletePromptShown(true)}
          disabled={editingForm || createForm}
          data-testid="BtnDeleteDoc"
        >
          Delete
        </button>
      )}
    </>
  );
}

export default BtnDeleteDoc;
