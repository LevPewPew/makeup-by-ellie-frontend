import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer';
import QuestionsContainer from '../../components/QuestionsContainer/QuestionsContainer';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import FormContainer from '../../components/FormContainer/FormContainer';

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
      <PortfolioContainer />
      <ServicesContainer />
      <QuestionsContainer />
    </div>
  );
}

export default AdminPage;
