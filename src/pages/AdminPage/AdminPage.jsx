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

      // setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleQuestionsSubmit() {
    const { question, answer } = questionForm.values;

    let params = { question, answer };

    try {
      await axios.post(`${backendUrl}/FAQ`, params);
      dispatch({ type: 'SUCCESSFUL_SUBMIT' });
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
      {/* <WorkForm
        onSubmit={handlePortfolioSubmit}
        success={success}
        setSuccess={setSuccess}
      />
      <PortfolioContainer /> */}
      <QuestionForm
        onSubmit={handleQuestionsSubmit}
      />
      <QuestionsContainer />
    </div>
  )
}

export default AdminPage;
