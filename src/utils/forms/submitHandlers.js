import axios from 'axios';
import { store } from '../../index';
import { reset } from 'redux-form';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

async function questionsSubmitHandler(values, id) {
  const { question, answer } = values;

  let params = { question, answer };

  try {
    if (id) {
      await axios.put(`${backendUrl}/questions/${id}`, params);
    } else {
      await axios.post(`${backendUrl}/questions`, params);
    }
    let res = await axios.get(`${backendUrl}/questions`);
    store.dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
    store.dispatch({ type: 'NOT_EDITING_FORM' });
    store.dispatch(reset('QuestionForm'));
  } catch (err) {
    console.log(err);
  }
}

export { questionsSubmitHandler };