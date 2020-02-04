import React from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import axios from 'axios';
import contactPageImage from '../../media/contact-page.jpeg';
import { reset } from 'redux-form';
import './ContactPage.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactPage() {
  const dispatch = useDispatch();

  async function submit(values) {
    try {
      let res = await axios.post(`${backendUrl}/contact`, values);
      alert(res.data);
      dispatch(reset('ContactForm'));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="ContactPage" data-testid="ContactPage">
      <h1>CONTACT</h1>
      <div className="form-img-info-container">
        <ContactForm onSubmit={submit} />
        <div className="img-info-container">
          <img src={contactPageImage} alt="woman with makeup" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
