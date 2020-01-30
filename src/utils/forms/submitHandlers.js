import axios from 'axios';
import { store } from '../../index';
import { reset } from 'redux-form';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

async function portfolioSubmitHandler(values, id) {
  let { category, imageBlobs } = values;

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
    store.dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data });
    store.dispatch({ type: `${category.toUpperCase()}_PORTFOLIO_DATA` });
    store.dispatch({ type: 'DISABLE_CREATE_FORM' });
    store.dispatch({ type: 'DISABLE_EDITING_FORM' });
    store.dispatch({ type: 'SUCCESSFUL_SUBMIT' });
  } catch (err) {
    console.log(err);
  }
}

async function servicesSubmitHandler(values, id) {
  let { title, description, imageBlobs } = values;

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
      
      let params = { title, description, imageUrl: signedUrl };
      
      await axios.post(`${backendUrl}/services`, params);
    }

    let res = await axios.get(`${backendUrl}/services`);
    store.dispatch({ type: 'UPDATE_SERVICES_DATA', newServicesData: res.data });
    store.dispatch({ type: 'DISABLE_CREATE_FORM' });
    store.dispatch({ type: 'DISABLE_EDITING_FORM' });
    store.dispatch({ type: 'SUCCESSFUL_SUBMIT' });
  } catch (err) {
    console.log(err);
  }
}

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
    store.dispatch({ type: 'DISABLE_CREATE_FORM' });
    store.dispatch({ type: 'DISABLE_EDITING_FORM' });
    store.dispatch({ type: 'SUCCESSFUL_SUBMIT' });
    store.dispatch(reset('QuestionForm'));
  } catch (err) {
    console.log(err);
  }
}

export {
  portfolioSubmitHandler,
  servicesSubmitHandler,
  questionsSubmitHandler
};