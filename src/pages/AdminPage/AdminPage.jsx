import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer';
import WorkForm from '../../components/WorkForm';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function AdminPage() {
  const workForm = useSelector((state) => state.form.WorkForm);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  async function handlePortfolioSubmit() {
    let { category, imageBlobs } = workForm.values;

    try {
      for (let i = 0; i < imageBlobs.length; i++) {
        let file = imageBlobs[i];
        let fileParts = imageBlobs[i].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
    
        let res = await Axios.post(
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

        res = await Axios.put(signedRequest, file, options)
        
        let params = { category, imageUrl: signedUrl };
        
        await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/portfolio`, params);
      }
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    dispatch({type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: true});

    return () => dispatch({ type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: false });
  }, [])

  useEffect(() => {
    (async () => {
      let res = await Axios.get(`${backendUrl}/portfolio`);
      dispatch({ type: 'UPDATE_PORTFOLIO_DATA', newPortfolioData: res.data })
    })();
  }, [success]);

  return (
    <div className="AdminPage" data-testid="AdminPage">
      <h1>Admin Dashboard</h1>
      <PortfolioContainer />
      <WorkForm
        onSubmit={handlePortfolioSubmit}
        success={success}
        setSuccess={setSuccess}
      />
    </div>
  )
}

export default AdminPage;