import React from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactForm/ContactInfo";
import axios from "axios";
import contactPageImage from "../../media/contact-page.jpeg";
import { reset } from "redux-form";
import "./ContactPage.scss";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
// Contact Service is Available (CSA)
const CSA_FLAG = true;

function ContactPage() {
  const dispatch = useDispatch();

  async function submit(values) {
    try {
      let res = await axios.post(`${backendUrl}/contact`, values);
      alert(res.data);
      dispatch(reset("ContactForm"));
    } catch (err) {
      console.log(err);
    }
  }

  // ContactInfo used only if ContactForm service is down
  return (
    <div className="ContactPage" data-testid="ContactPage">
      <h1>CONTACT</h1>
      <div className="form-img-info-container">
        {CSA_FLAG ? <ContactForm onSubmit={submit} /> : <ContactInfo />}
        <div className="img-info-container">
          <img src={contactPageImage} alt="woman with makeup" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
