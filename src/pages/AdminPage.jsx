import React, { useEffect } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import WorkForm from '../components/WorkForm';

function AdminPage() {
  const workForm = useSelector((state) => state.form.WorkForm);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: true});

    return () => dispatch({type: "UPDATE_ON_ADMIN_DASH", newOnAdminDash: false});
  }, [])

  async function handleSubmit() {
    let { category, image } = workForm.values;
    let params = { category, image };
    try {
      await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/portfolio`, params);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <div className="AdminPage">
      <h1>ADMIN PAGE</h1>
      <WorkForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default AdminPage;