import React,{useState} from 'react';
import AdminLoginForm from '../../components/AdminLoginForm';
import { Redirect } from 'react-router';
import axios from 'axios';

function AdminLoginPage() {

  const [redirect,setRedirect] = useState(false);

  const submit = async (values) => {

    try
    {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin-login`,{ username:values.username, password:values.password});
      localStorage.setItem('token', response.data.token);
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
      {redirect?<Redirect push to='/admin'/>:null}
    </div>
  )
}

export default AdminLoginPage




