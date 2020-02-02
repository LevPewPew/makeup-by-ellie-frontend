import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import axios from 'axios';
import homepageImage from '../../media/homepage-image.jpg';
import './ContactPage.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ContactPage() {
  function submit(values) {
    try {
      let res = axios.post(`${backendUrl}/contact`, values);
      alert(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="ContactPage" data-testid="ContactPage">
      <h1>CONTACT</h1>
      <div className="sweg">
        <div className="grid">
          <div className="formContainer">
            <ContactForm onSubmit={submit}/>
          </div>
          <div className="infoContainer">
            <img src={homepageImage} alt="hero" style={{ width: "400px" }}/>
            <h3>Ellie</h3><br />
            <p>
              Ph: xxxx xxx xxx <br /><br />
              Sample Information <br /><br />
              Please complete the form for more information - I will get back to you as soon as possible. <br /><br />
              Bookings by appointment <br /><br />
              All appointments for less than four people are located at my private studio in Melbourne. If your party exceeds 3 people, such as for weddings or a special event, I will travel to your required location. <br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
