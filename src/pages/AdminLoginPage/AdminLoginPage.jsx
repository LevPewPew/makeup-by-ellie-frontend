import React,{useState,useEffect} from 'react';
import AdminLoginForm from '../../components/AdminLoginForm';
import {useSelector,useDispatch} from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';

function AdminLoginPage() {

  const onAdminDash = useSelector((state) => state.adminDashReducer.onAdminDash);
  const dispatch = useDispatch();

  const [redirect,setRedirect] = useState(false)

  const submit = async (values) => {

    try
    {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin-login`,{ username:values.username, password:values.password});
      localStorage.setItem('token', response.data.token);
      dispatch({ type:"UPDATE_ON_ADMIN_DASH", newOnAdminDash:true})
      setRedirect(true)
    }  
    catch
    {
      alert('Incorrect credentials. Please try again')
    }
    
  }

  return (
    <div>
      <h3>Admin Login</h3>
      <AdminLoginForm onSubmit={submit}/>
      {redirect?<Redirect to='/admin'/>:null}
    </div>
  )
}

export default AdminLoginPage



