async function handleQuestionsSubmit(values) {
  const { question, answer } = values;

  let id = editingForm;
  let params = { question, answer };

  try {
    if (editingForm) {
      await axios.put(`${backendUrl}/questions/${id}`, params);
    } else {
      await axios.post(`${backendUrl}/questions`, params);
    }
    let res = await axios.get(`${backendUrl}/questions`);
    dispatch({ type: 'UPDATE_QUESTIONS_DATA', newQuestionsData: res.data });
    dispatch({ type: 'NOT_EDITING_FORM' });
    dispatch(reset('QuestionForm'));
  } catch (err) {
    console.log(err);
  }
}

export { handleQuestionsSubmit };