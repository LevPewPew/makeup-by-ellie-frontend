import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormContainer from '../../components/FormContainer/FormContainer';
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer';
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import ContactsContainer from '../../components/ContactsContainer/ContactsContainer';

function AdminPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: true });

    return () => dispatch({ type: 'UPDATE_ON_ADMIN_DASH', newOnAdminDash: false });
  }, [dispatch]);

  return (
    <div className="AdminPage" data-testid="AdminPage">
      <h1>Admin Dashboard</h1>
      <FormContainer />
      <h2>Portfolio</h2>
      <PortfolioContainer />
      <h2>Services</h2>
      <ServicesContainer />
      <h2>Questions</h2>
      <QuestionsContainer />
      <h2>Contacts</h2>
      <ContactsContainer />
    </div>
  );
}

export default AdminPage;
