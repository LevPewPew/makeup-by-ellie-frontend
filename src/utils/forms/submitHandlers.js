import axios from 'axios';
import store from '../../store';
import { reset } from 'redux-form';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

async function portfolioSubmitHandler(workForm, id) {
  // reduxForm will place values in the workform directly, and in values when initial values are also present. reduxForms is so bad. will try react-hooks-form package in future projects.
  const { category, imageBlobs } = id ? workForm.values : workForm;
  
  try {
    if (id) {
      // Note: the image cannot be edited as this would have taken a lot of time to implement, time we do not have have in the 3 weeks given for this assignment
      let { imageUrl } = workForm.initial;
      let params = { category, imageUrl };
      await axios.put(`${backendUrl}/portfolio/${id}`, params);
    } else {
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
    }

    let res = await axios.get(`${backendUrl}/portfolio`);
    store.dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data });
    store.dispatch({ type: `FILTER_PORTFOLIO_DATA_${category.toUpperCase()}` });
    store.dispatch({ type: 'DISABLE_CREATE_FORM' });
    store.dispatch({ type: 'DISABLE_EDITING_FORM' });
    store.dispatch({ type: 'SUCCESSFUL_SUBMIT' });
  } catch (err) {
    console.log(err);
  }
}

async function servicesSubmitHandler(serviceForm, id) {
  // reduxForm will place values in the workform directly, and in values when initial values are also present. reduxForms is so bad. will try react-hooks-form package in future projects.
  const { title, description, imageBlobs, cost, duration, disclaimer } = id ? serviceForm.values : serviceForm;

  try {
    if (id) {
      // Note: the image cannot be edited as this would have taken a lot of time to implement, time we do not have have in the 3 weeks given for this assignment
      let { imageUrl } = serviceForm.initial;
      let params = { title, description, imageUrl, cost, duration, disclaimer };
      await axios.put(`${backendUrl}/services/${id}`, params);
    } else {
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
        
        let params = { title, description, cost, duration, disclaimer, imageUrl: signedUrl };
        
        await axios.post(`${backendUrl}/services`, params);
      }
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
