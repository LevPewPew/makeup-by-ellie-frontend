import React, { useState } from 'react';
import AdminLoginForm from '../../components/AdminLoginForm/AdminLoginForm';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';
import './AdminLoginPage.scss';

function AdminLoginPage() {
  const [ redirect, setRedirect ] = useState(false);

  const dispatch = useDispatch();

  const submit = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin-login`, { username: values.username, password: values.password });
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      localStorage.setItem('token', response.data.token);
      dispatch({ type: "UPDATE_TOKEN_DATA", newToken: response.data.token });
      setRedirect(true);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="AdminLoginPage">
      <h1>ADMIN LOGIN</h1>
      <AdminLoginForm onSubmit={submit} />
      {
        redirect ?
        <Redirect push to='/admin'/> :
        null
      }
    </div>
  );
}

export default AdminLoginPage;
