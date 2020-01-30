import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from 'redux-form';
import PortfolioContainer from '../../components/PortfolioContainer';
import WorkForm from '../../components/WorkForm/WorkForm';
import QuestionsContainer from '../../components/QuestionsContainer';
import QuestionForm from '../../components/QuestionForm/QuestionForm';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function AdminPage() {
  const workForm = useSelector((state) => state.form.WorkForm);
  const questionForm = useSelector((state) => state.form.QuestionForm);
  const editingForm = useSelector((state) => state.adminDashReducer.editingForm);
  const dispatch = useDispatch();

  async function handlePortfolioSubmit() {
    let { category, imageBlobs } = workForm.values;

    try {
      for (let i = 0; i < imageBlobs.length; i++) {
        let file = imageBlobs[i];
        let fileParts = imageBlobs[i].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
    
        let res = await axios.post(
          `${backendUrl}/aws-s3`,
          {
            fileName : fileName,
            fileType : fileType
          }
        )
        let returnData = res.data.data.returnData;
        let signedRequest = returnData.signedRequest;
        let signedUrl = returnData.url;
    
        let options = {
          headers: {
            'Content-Type': fileType
          }
        };

        res = await axios.put(signedRequest, file, options)
        
        let params = { category, imageUrl: signedUrl };
        
        await axios.post(`${backendUrl}/portfolio`, params);
      }

      let res = await axios.get(`${backendUrl}/portfolio`);
      dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data });
      dispatch({ type: `${category.toUpperCase()}_PORTFOLIO_DATA` });
      dispatch({ type: 'SUCCESSFUL_SUBMIT' });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleQuestionsSubmit() {
    const { question, answer } = questionForm.values;

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

  useEffect(() => {
    dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: true });

    return () => dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: false });
  }, [dispatch]);

  return (
    <div className="AdminPage" data-testid="AdminPage">
      <h1>Admin Dashboard</h1>
      <WorkForm
        onSubmit={handlePortfolioSubmit}
      />
      <PortfolioContainer />
      <QuestionForm
        onSubmit={handleQuestionsSubmit}
      />
      <QuestionsContainer />
    </div>
  )
}

export default AdminPage;
