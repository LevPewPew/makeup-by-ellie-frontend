import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer';
import WorkForm from '../../components/WorkForm';
// import TestimonialsContainer from '../components/TestimonialContainer';
// import TestimonialForm from '../components/TestimonialForm';
// import ServicesContainer from '../components/ServicesContainer';
// import ServiceForm from '../components/ServiceForm';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function AdminPage() {
  const workForm = useSelector((state) => state.form.WorkForm);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dispatch({type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: true});

    return () => dispatch({type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: false});
  }, [])

  async function handlePortfolioSubmit() {
    let { category, imageBlob } = workForm.values;
    
    let file = imageBlob[0];
    let fileParts = imageBlob[0].name.split('.');
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
    let params = { category, imageUrl: signedUrl };
    res = await Axios.put(signedRequest, file, options)
    setSuccess(true);

    try {
      await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/portfolio`, params);
    } catch (err) {
      console.log(err);
    }
  }

  // async function handleTestimonialSubmit() {
  //   // TODO replace these with testimonial model fields
  //   let { name, text } = TestimonialForm.values;
  //   let params = { name, text };
  //   try {
  //     await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/testimonials`, params);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function handleServicesSubmit() {
  //   let { name, description, imageUrl } = ServiceForm.values;
  //   let params = { name, description, imageUrl };
  //   try {
  //     await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/services`, params);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="AdminPage">
      <h1>Admin Dashboard</h1>
      <PortfolioContainer />
      <WorkForm
        onSubmit={handlePortfolioSubmit}
      />
      {/* <TestimonialsContainer />
      <TestimonialForm onSubmit={handleTestimonialSubmit}/>
      <ServicesContainer />
      <ServiceForm onSubmit={handleServicesSubmit}/> */}
    </div>
  )
}

export default AdminPage;