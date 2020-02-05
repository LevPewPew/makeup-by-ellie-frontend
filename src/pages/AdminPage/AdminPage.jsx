import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormContainer from '../../components/FormContainer/FormContainer';
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer';
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import ContactsContainer from '../../components/ContactsContainer/ContactsContainer';
import './AdminPage.scss';

function AdminPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: true });

    return () => {
      dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: false });
      dispatch({ type: 'DISABLE_CREATE_FORM' });
      dispatch({ type: 'DISABLE_EDITING_FORM' });
    }
  }, [dispatch]);

  return (
    <div className="AdminPage" data-testid="AdminPage">
      <h1>ADMIN DASHBOARD</h1>
      <FormContainer />
      <div className="container-display">
        <h2>Portfolio</h2>
        <PortfolioContainer />
        <h2>Services</h2>
        <ServicesContainer />
        <h2>FAQ</h2>
        <QuestionsContainer />
        <h2>Contacts</h2>
        <ContactsContainer />
      </div>
    </div>
  );
}

export default AdminPage;
