import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer';
import QuestionsContainer from '../../components/QuestionsContainer';
import ServicesContainer from '../../components/ServicesContainer';
import ServiceForm from '../../components/ServiceForm/ServiceForm';
import FormContainer from '../../components/FormContainer/FormContainer';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function AdminPage() {
  const serviceForm = useSelector((state) => state.form.ServiceForm);
  const dispatch = useDispatch();

  async function handleServiceSubmit() {
    let { title, description, imageBlobs } = serviceForm.values;

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
      dispatch({ type: 'UPDATE_SERVICES_DATA', newServicesData: res.data });
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
      <FormContainer />
      <PortfolioContainer />
      <ServicesContainer />
      <QuestionsContainer />
    </div>
  )
}

export default AdminPage;
